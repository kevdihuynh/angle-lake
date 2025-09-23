import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { siteConfig } from '../config/siteConfig'
import './Header.css'
import './Footer.css'

interface VenmoPaymentConfirmationProps {
  paymentData: {
    amount: string
    firstName: string
    lastName: string
    email: string
    address: string
    paymentType: string
    notes: string
  }
  onPaymentConfirmed: () => void
  onBack: () => void
}

const VenmoPaymentConfirmation: React.FC<VenmoPaymentConfirmationProps> = ({
  paymentData,
  onPaymentConfirmed,
  onBack
}) => {
  const [paymentConfirmed, setPaymentConfirmed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleConfirmationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentConfirmed(e.target.checked)
  }

  const handleSubmit = async () => {
    if (!paymentConfirmed) return
    
    setIsSubmitting(true)
    try {
      // Call the parent's payment confirmation handler
      await onPaymentConfirmed()
    } catch (error) {
      console.error('Error confirming payment:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <div className="container">
          <div className="venmo-confirmation-container">
            <div className="venmo-confirmation-card">
              <h1 className="venmo-title">PAY MY ANNUAL DUES AND/OR DONATE</h1>
              
              <div className="instructions-box">
                <div className="info-icon">ℹ</div>
                <p className="instructions-text">
                  Scan the QR code below to open the Venmo app and make your payment. 
                  Once completed, check the box below to confirm your payment.
                </p>
              </div>

              <div className="qr-code-container">
                <div className="qr-code-placeholder">
                  <div className="qr-placeholder-text">
                    <p>Scan this QR code with your Venmo app</p>
                    <p className="qr-url">{siteConfig.venmoQRCode}</p>
                  </div>
                </div>
                <p className="venmo-logo">venmo</p>
              </div>

              <div className="payment-details">
                <h3>Payment Details</h3>
                <div className="payment-info">
                  <p><strong>Amount:</strong> {paymentData.amount}</p>
                  <p><strong>Type:</strong> {paymentData.paymentType.replace('-', ' ')}</p>
                  <p><strong>Name:</strong> {paymentData.firstName} {paymentData.lastName}</p>
                  {paymentData.notes && <p><strong>Notes:</strong> {paymentData.notes}</p>}
                </div>
              </div>

              <div className="confirmation-section">
                <label className="confirmation-checkbox">
                  <input
                    type="checkbox"
                    checked={paymentConfirmed}
                    onChange={handleConfirmationChange}
                    className="checkbox-input"
                  />
                  <span className="confirmation-text">
                    I have paid {paymentData.amount} using Venmo
                  </span>
                </label>
              </div>

              <div className="button-group">
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={onBack}
                  disabled={isSubmitting}
                >
                  Back to Form
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={handleSubmit}
                  disabled={!paymentConfirmed || isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Confirm Payment'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default VenmoPaymentConfirmation
