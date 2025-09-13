import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import './Header.css'
import './Footer.css'

const PaymentsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    amount: '100.00',
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    address: '8888 13th Ave S, Seattle, WA 98168',
    notes: 'Fundraising for Improve Beach Ltd...',
    paymentType: 'annual-dues',
    paymentMethod: 'paypal'
  })

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

  const paymentHistory = [
    {
      name: 'John Doe',
      email: 'jd123@gmail.com',
      notes: 'annual due to 888 13th ave...',
      type: 'Annual Due',
      method: 'Venmo',
      amount: '$100.00',
      date: '12/6/2024'
    },
    {
      name: 'John Doe',
      email: 'jd125@gmail.com',
      notes: 'polar bear plunge fundraising...',
      type: 'Donation',
      method: 'Cash/Check',
      amount: '$50.00',
      date: '10/23/2024'
    },
    {
      name: 'John Doe',
      email: 'jd123@gmail.com',
      notes: 'for a good cause...',
      type: 'Donation',
      method: 'PayPal',
      amount: '$25.00',
      date: '1/1/2025'
    }
  ]

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        {/* Make Payment Section */}
        <section id="pay-dues" className="payment-form-section">
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
        <section id="payment-status" className="payment-history-section">
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
        <section id="treasurer-reports" className="treasurer-report-section">
          <div className="container">
            <div className="section-header">
              <h2>TREASURER'S REPORT</h2>
            </div>
            <div className="report-viewer">
              <div className="report-header">
                <span>Viewing</span>
                <a href="#" className="report-link">
                  <span className="report-dot">●</span>
                  2024 Angle Lake Manor Club Financial Statement
                </a>
              </div>
              <div className="document-viewer">
                <div className="document-header">
                  <h4>WASHINGTON STATE RECORDER'S Cover Sheet</h4>
                  <div className="document-controls">
                    <button>🔍</button>
                    <button>⬇️</button>
                    <button>🖨️</button>
                    <button>⛶</button>
                  </div>
                </div>
                <div className="document-content">
                  <p><strong>Return Address:</strong> Kurt Nordquist 19208 39th Ave S Seattle, WA 98188</p>
                  <div className="barcode">20120827000664</div>
                  <p><strong>RECORDS, B&M MISC PAGE 1 OF 009 08/27/2012 11:18 KING COUNTY, WA</strong></p>
                  <p>Please print or type information WASHINGTON STATE RECORDER'S Cover Sheet (RCW 65.04)</p>
                  <p><strong>Document Title(s) (or transactions contained therein):</strong></p>
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
    </div>
  )
}

export default PaymentsPage

