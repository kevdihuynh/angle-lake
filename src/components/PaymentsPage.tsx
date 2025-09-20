import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import ContentManager from '../config/ContentManager'
import { siteConfig } from '../config/siteConfig'
import './Header.css'
import './Footer.css'

const PaymentsPage: React.FC = () => {
  const [formData, setFormData] = useState(siteConfig.paymentsPage.defaultFormData)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  // Use configuration data
  const paymentHistory = siteConfig.paymentsPage.paymentHistory
  const treasurerReport = siteConfig.paymentsPage.treasurerReport

  return (
    <div className="App">
      <Header />
      <main className="main-content">
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
                </div>
              </div>
              
              <div className="form-submit">
                <button type="submit" className="btn btn-primary">SUBMIT</button>
              </div>
            </form>
          </div>
        </section>

        {/* Payment History Section */}
        <section id="payment-status" className="payment-history-section section-grey">
          <div className="container">
            <div className="section-header">
              <h2>PAYMENT HISTORY</h2>
            </div>
            <div className="payment-table-container">
              <table className="payment-table">
                <thead>
                  <tr>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>NOTES</th>
                    <th>TYPE</th>
                    <th>METHOD</th>
                    <th>AMOUNT</th>
                    <th>DATE</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentHistory.map((payment, index) => (
                    <tr key={index}>
                      <td>{payment.name}</td>
                      <td>{payment.email}</td>
                      <td>{payment.notes}</td>
                      <td>{payment.type}</td>
                      <td>{payment.method}</td>
                      <td>{payment.amount}</td>
                      <td>{payment.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="pagination">
                <button className="pagination-btn">‹</button>
                <span className="pagination-info">1 / 3</span>
                <button className="pagination-btn">›</button>
              </div>
            </div>
          </div>
        </section>

        {/* Treasurer's Report Section */}
        <section id="treasurer-reports" className="treasurer-report-section section-white">
          <div className="container">
            <div className="section-header">
              <h2>TREASURER'S REPORT</h2>
            </div>
            <div className="report-viewer">
              <div className="report-header">
                <span>Viewing</span>
                <a href="#" className="report-link">
                  <span className="report-dot">●</span>
                  {treasurerReport.title}
                </a>
              </div>
              <div className="document-viewer">
                <div className="document-header">
                  <h4>{treasurerReport.documentTitle}</h4>
                  <div className="document-controls">
                    <button>🔍</button>
                    <button>⬇️</button>
                    <button>🖨️</button>
                    <button>⛶</button>
                  </div>
                </div>
                <div className="document-content">
                  <p><strong>Return Address:</strong> {treasurerReport.returnAddress}</p>
                  <div className="barcode">{treasurerReport.barcode}</div>
                  <p><strong>{treasurerReport.documentInfo}</strong></p>
                  {treasurerReport.documentContent.map((content, index) => (
                    <p key={index}>{content}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="section-button">
              <button className="btn btn-primary">DOWNLOAD REPORT</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ContentManager />
    </div>
  )
}

export default PaymentsPage

