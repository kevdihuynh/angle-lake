import { 
  collection, 
  addDoc, 
  query, 
  where, 
  orderBy, 
  getDocs, 
  Timestamp,
  doc,
  updateDoc
} from 'firebase/firestore'
import { db } from '../config/firebase'

export interface PaymentData {
  id?: string
  userId: string
  userEmail: string
  amount: number
  paymentType: 'annual-dues' | 'donation' | 'both'
  paymentMethod: 'cash-check' | 'venmo' | 'paypal' | 'credit-card'
  firstName: string
  lastName: string
  address: string
  notes?: string
  status: 'pending' | 'processing' | 'completed' | 'failed'
  stripePaymentId?: string
  createdAt: Date
  completedAt?: Date
}

export interface MockStripePaymentIntent {
  id: string
  status: 'requires_payment_method' | 'requires_confirmation' | 'processing' | 'succeeded' | 'canceled'
  amount: number
  currency: string
  client_secret: string
}

class PaymentService {
  private readonly COLLECTION_NAME = 'payments'

  // Mock Stripe Payment Intent Creation
  async createPaymentIntent(amount: number): Promise<MockStripePaymentIntent> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Mock Stripe response
    const mockPaymentIntent: MockStripePaymentIntent = {
      id: `pi_mock_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      status: 'requires_payment_method',
      amount: amount * 100, // Stripe uses cents
      currency: 'usd',
      client_secret: `pi_mock_${Date.now()}_secret_${Math.random().toString(36).substr(2, 9)}`
    }

    return mockPaymentIntent
  }

  // Mock Stripe Payment Confirmation
  async confirmPayment(paymentIntentId: string): Promise<MockStripePaymentIntent> {
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Mock successful payment (90% success rate for demo)
    const isSuccess = Math.random() > 0.1
    
    return {
      id: paymentIntentId,
      status: isSuccess ? 'succeeded' : 'failed',
      amount: 0, // Would be filled from the original intent
      currency: 'usd',
      client_secret: `${paymentIntentId}_secret`
    }
  }

  // Save payment to Firestore
  async createPayment(paymentData: Omit<PaymentData, 'id' | 'createdAt'>): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, this.COLLECTION_NAME), {
        ...paymentData,
        createdAt: Timestamp.fromDate(new Date())
      })
      return docRef.id
    } catch (error) {
      console.error('Error creating payment:', error)
      throw new Error('Failed to create payment record')
    }
  }

  // Update payment status
  async updatePaymentStatus(
    paymentId: string, 
    status: PaymentData['status'], 
    stripePaymentId?: string
  ): Promise<void> {
    try {
      const paymentRef = doc(db, this.COLLECTION_NAME, paymentId)
      const updateData: any = {
        status,
        ...(stripePaymentId && { stripePaymentId }),
        ...(status === 'completed' && { completedAt: Timestamp.fromDate(new Date()) })
      }
      
      await updateDoc(paymentRef, updateData)
    } catch (error) {
      console.error('Error updating payment status:', error)
      throw new Error('Failed to update payment status')
    }
  }

  // Get user's payment history
  async getUserPayments(userId: string): Promise<PaymentData[]> {
    try {
      const q = query(
        collection(db, this.COLLECTION_NAME),
        where('userId', '==', userId)
      )
      
      const querySnapshot = await getDocs(q)
      const payments: PaymentData[] = []
      
      querySnapshot.forEach((doc) => {
        const data = doc.data()
        payments.push({
          id: doc.id,
          ...data,
          createdAt: data.createdAt.toDate()
        } as PaymentData)
      })
      
      // Sort payments by createdAt in descending order on the client side
      return payments.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    } catch (error) {
      console.error('Error fetching user payments:', error)
      throw new Error('Failed to fetch payment history')
    }
  }

  // Get all payments (admin only)
  async getAllPayments(): Promise<PaymentData[]> {
    try {
      const q = query(
        collection(db, this.COLLECTION_NAME),
        orderBy('createdAt', 'desc')
      )
      
      const querySnapshot = await getDocs(q)
      const payments: PaymentData[] = []
      
      querySnapshot.forEach((doc) => {
        const data = doc.data()
        payments.push({
          id: doc.id,
          ...data,
          createdAt: data.createdAt.toDate()
        } as PaymentData)
      })
      
      return payments
    } catch (error) {
      console.error('Error fetching all payments:', error)
      throw new Error('Failed to fetch payments')
    }
  }

  // Process a complete payment flow (mock)
  async processPayment(paymentData: Omit<PaymentData, 'id' | 'createdAt' | 'status'>): Promise<{
    success: boolean
    paymentId: string
    stripePaymentId?: string
    error?: string
  }> {
    try {
      // Step 1: Create payment record in pending status
      const paymentId = await this.createPayment({
        ...paymentData,
        status: 'pending'
      })

      // Step 2: For credit card payments, create and confirm payment intent
      if (paymentData.paymentMethod === 'credit-card') {
        // Update status to processing
        await this.updatePaymentStatus(paymentId, 'processing')

        // Create mock payment intent
        const paymentIntent = await this.createPaymentIntent(paymentData.amount)
        
        // Confirm payment
        const confirmedPayment = await this.confirmPayment(paymentIntent.id)
        
        if (confirmedPayment.status === 'succeeded') {
          await this.updatePaymentStatus(paymentId, 'completed', confirmedPayment.id)
          return {
            success: true,
            paymentId,
            stripePaymentId: confirmedPayment.id
          }
        } else {
          await this.updatePaymentStatus(paymentId, 'failed', confirmedPayment.id)
          return {
            success: false,
            paymentId,
            error: 'Payment failed to process'
          }
        }
      } else {
        // For other payment methods (cash, check, venmo, paypal), mark as completed
        // In real implementation, these might require manual verification
        await this.updatePaymentStatus(paymentId, 'completed')
        return {
          success: true,
          paymentId
        }
      }
    } catch (error) {
      console.error('Error processing payment:', error)
      return {
        success: false,
        paymentId: '',
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      }
    }
  }
}

export const paymentService = new PaymentService()
