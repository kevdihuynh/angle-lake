import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import ContentManager from '../config/ContentManager'
import PDFPreview from './PDFPreview'
import { siteConfig } from '../config/siteConfig'
import { useAuth } from '../contexts/AuthContext'
import { paymentService, PaymentData } from '../services/paymentService'
import './Header.css'
import './Footer.css'
import './PDFPreview.css'

const PaymentsPage: React.FC = () => {
  const { currentUser, logout } = useAuth()
  const [formData, setFormData] = useState(siteConfig.paymentsPage.defaultFormData)
  const [userPayments, setUserPayments] = useState<PaymentData[]>([])
  const [loading, setLoading] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [selectedTreasurerReport, setSelectedTreasurerReport] = useState('2025')

  // Load user's payment history
  useEffect(() => {
    if (currentUser) {
      loadUserPayments()
    }
  }, [currentUser])

  const loadUserPayments = async () => {
    if (!currentUser) return
    
    try {
      setLoading(true)
      const payments = await paymentService.getUserPayments(currentUser.uid)
      setUserPayments(payments)
    } catch (error) {
      console.error('Error loading payments:', error)
      setMessage('Error loading payment history')
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!currentUser) {
      setMessage('You must be signed in to make a payment')
      return
    }

    setSubmitting(true)
    setMessage('')

    try {
      // Validate form data
      if (!formData.amount || parseFloat(formData.amount) <= 0) {
        setMessage('Please enter a valid amount')
        return
      }

      const paymentData = {
        userId: currentUser.uid,
        userEmail: currentUser.email || '',
        amount: parseFloat(formData.amount),
        paymentType: formData.paymentType as 'annual-dues' | 'donation' | 'both',
        paymentMethod: formData.paymentMethod as 'cash-check' | 'venmo' | 'paypal' | 'credit-card',
        firstName: formData.firstName,
        lastName: formData.lastName,
        address: formData.address,
        notes: formData.notes
      }

      const result = await paymentService.processPayment(paymentData)
      
      if (result.success) {
        setMessage('Payment submitted successfully!')
        // Reset form
        setFormData(siteConfig.paymentsPage.defaultFormData)
        // Reload payment history
        await loadUserPayments()
      } else {
        setMessage(`Payment failed: ${result.error || 'Unknown error'}`)
      }
    } catch (error) {
      console.error('Payment submission error:', error)
      setMessage('Error submitting payment. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error('Logout error:', error)
    }
  }


  return (
    <div className="App">
      <Header />
      <main className="main-content">
        {/* User Info Section */}
        <section className="user-info-section section-grey" style={{ padding: '20px 0' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3>Welcome, {currentUser?.email}</h3>
                <p>You are signed in and can make payments and view your payment history.</p>
              </div>
              <button 
                onClick={handleLogout}
                className="btn btn-secondary"
                style={{ padding: '8px 16px' }}
              >
                Sign Out
              </button>
            </div>
          </div>
        </section>

        {/* Status Message */}
        {message && (
          <section style={{ padding: '10px 0' }}>
            <div className="container">
              <div style={{
                padding: '15px',
                backgroundColor: message.includes('Error') || message.includes('failed') ? '#fee' : '#efe',
                border: `1px solid ${message.includes('Error') || message.includes('failed') ? '#fcc' : '#cfc'}`,
                borderRadius: '4px',
                color: message.includes('Error') || message.includes('failed') ? '#c33' : '#363',
                textAlign: 'center'
              }}>
                {message}
              </div>
            </div>
          </section>
        )}

        {/* Make Payment Section */}
        <section id="pay-dues" className="payment-form-section section-white">
          <div className="container">
            <div className="section-header">
              <h2>MAKE PAYMENT</h2>
            </div>
            <form className="payment-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="amount">Amount</label>
                <input
                  type="text"
                  id="amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="address">Home Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="notes">Notes</label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={3}
                />
              </div>
              
              <div className="form-group">
                <label>I would like to</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="paymentType"
                      value="annual-dues"
                      checked={formData.paymentType === 'annual-dues'}
                      onChange={handleInputChange}
                    />
                    Pay my annual dues
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="paymentType"
                      value="donation"
                      checked={formData.paymentType === 'donation'}
                      onChange={handleInputChange}
                    />
                    Make a donation
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="paymentType"
                      value="both"
                      checked={formData.paymentType === 'both'}
                      onChange={handleInputChange}
                    />
                    Pay my dues and donate
                  </label>
                </div>
              </div>
              
              <div className="form-group">
                <label>Select a payment method</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash-check"
                      checked={formData.paymentMethod === 'cash-check'}
                      onChange={handleInputChange}
                    />
                    Cash or Check
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="venmo"
                      checked={formData.paymentMethod === 'venmo'}
                      onChange={handleInputChange}
                    />
                    Venmo
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={formData.paymentMethod === 'paypal'}
                      onChange={handleInputChange}
                    />
                    PayPal
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="credit-card"
                      checked={formData.paymentMethod === 'credit-card'}
                      onChange={handleInputChange}
                    />
                    Credit Card (Mock)
                  </label>
                </div>
              </div>
              
              <div className="form-submit">
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={submitting}
                  style={{ opacity: submitting ? 0.7 : 1 }}
                >
                  {submitting ? 'PROCESSING...' : 'SUBMIT PAYMENT'}
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Payment History Section */}
        <section id="payment-status" className="payment-history-section section-grey">
          <div className="container">
            <div className="section-header">
              <h2>YOUR PAYMENT HISTORY</h2>
            </div>
            
            {loading ? (
              <div style={{ textAlign: 'center', padding: '40px' }}>
                <div>Loading your payment history...</div>
              </div>
            ) : userPayments.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px' }}>
                <p>No payments found. Submit your first payment above!</p>
              </div>
            ) : (
              <div className="payment-table-container">
                <table className="payment-table">
                  <thead>
                    <tr>
                      <th>TYPE</th>
                      <th>METHOD</th>
                      <th>AMOUNT</th>
                      <th>STATUS</th>
                      <th>DATE</th>
                      <th>NOTES</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userPayments.map((payment) => (
                      <tr key={payment.id}>
                        <td style={{ textTransform: 'capitalize' }}>
                          {payment.paymentType.replace('-', ' ')}
                        </td>
                        <td style={{ textTransform: 'capitalize' }}>
                          {payment.paymentMethod.replace('-', ' ')}
                        </td>
                        <td>${payment.amount.toFixed(2)}</td>
                        <td>
                          <span style={{
                            padding: '4px 8px',
                            borderRadius: '4px',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            backgroundColor: 
                              payment.status === 'completed' ? '#d4edda' :
                              payment.status === 'processing' ? '#fff3cd' :
                              payment.status === 'failed' ? '#f8d7da' : '#e2e3e5',
                            color:
                              payment.status === 'completed' ? '#155724' :
                              payment.status === 'processing' ? '#856404' :
                              payment.status === 'failed' ? '#721c24' : '#6c757d'
                          }}>
                            {payment.status}
                          </span>
                        </td>
                        <td>{payment.createdAt.toLocaleDateString()}</td>
                        <td>{payment.notes || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>

        {/* Treasurer's Reports Section */}
        <section id="treasurer-reports" className="treasurer-reports-section section-white">
          <div className="container">
            <div className="section-header">
              <h2>TREASURER'S REPORTS</h2>
            </div>
            
            <PDFPreview
              title="Financial Statement"
              selectedValue={selectedTreasurerReport}
              options={siteConfig.treasurerReports}
              onSelectionChange={setSelectedTreasurerReport}
              downloadButtonText="DOWNLOAD REPORT"
              showSelector={true}
              showDownloadButton={true}
              showFallback={true}
            />
          </div>
        </section>
      </main>
      <Footer />
      <ContentManager />
    </div>
  )
}

export default PaymentsPage

