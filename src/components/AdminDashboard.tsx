import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { paymentService, PaymentData } from '../services/paymentService'
import Header from './Header'
import Footer from './Footer'
import './Header.css'
import './Footer.css'

// Admin email addresses - in a real app, this would be managed differently
const ADMIN_EMAILS = [
  'admin@anglelakemanor.com',
  'treasurer@anglelakemanor.com',
  // Add your admin emails here
]

const AdminDashboard: React.FC = () => {
  const { currentUser, logout } = useAuth()
  const [allPayments, setAllPayments] = useState<PaymentData[]>([])
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending' | 'failed'>('all')

  const isAdmin = currentUser && ADMIN_EMAILS.includes(currentUser.email || '')

  useEffect(() => {
    if (isAdmin) {
      loadAllPayments()
    }
  }, [isAdmin])

  const loadAllPayments = async () => {
    try {
      setLoading(true)
      const payments = await paymentService.getAllPayments()
      setAllPayments(payments)
    } catch (error) {
      console.error('Error loading payments:', error)
      setMessage('Error loading payments')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  const filteredPayments = allPayments.filter(payment => 
    filter === 'all' || payment.status === filter
  )

  const totalAmount = filteredPayments.reduce((sum, payment) => 
    payment.status === 'completed' ? sum + payment.amount : sum, 0
  )

  const paymentStats = {
    total: allPayments.length,
    completed: allPayments.filter(p => p.status === 'completed').length,
    pending: allPayments.filter(p => p.status === 'pending').length,
    processing: allPayments.filter(p => p.status === 'processing').length,
    failed: allPayments.filter(p => p.status === 'failed').length,
    totalRevenue: allPayments
      .filter(p => p.status === 'completed')
      .reduce((sum, p) => sum + p.amount, 0)
  }

  if (!isAdmin) {
    return (
      <div className="App">
        <Header />
        <main className="main-content">
          <section className="section-white">
            <div className="container">
              <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                <h2>Access Denied</h2>
                <p>You don't have permission to view this page.</p>
                <button onClick={handleLogout} className="btn btn-primary">
                  Sign Out
                </button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        {/* Admin Header */}
        <section className="admin-header section-grey" style={{ padding: '20px 0' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h2>Admin Dashboard</h2>
                <p>Welcome, {currentUser?.email} - You have admin access</p>
              </div>
              <button onClick={handleLogout} className="btn btn-secondary">
                Sign Out
              </button>
            </div>
          </div>
        </section>

        {/* Payment Statistics */}
        <section className="stats-section section-white">
          <div className="container">
            <div className="section-header">
              <h3>Payment Statistics</h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' }}>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                <h4 style={{ margin: '0 0 10px 0', color: '#28a745' }}>${paymentStats.totalRevenue.toFixed(2)}</h4>
                <p style={{ margin: 0, fontSize: '14px' }}>Total Revenue</p>
              </div>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                <h4 style={{ margin: '0 0 10px 0' }}>{paymentStats.total}</h4>
                <p style={{ margin: 0, fontSize: '14px' }}>Total Payments</p>
              </div>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                <h4 style={{ margin: '0 0 10px 0', color: '#28a745' }}>{paymentStats.completed}</h4>
                <p style={{ margin: 0, fontSize: '14px' }}>Completed</p>
              </div>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                <h4 style={{ margin: '0 0 10px 0', color: '#ffc107' }}>{paymentStats.pending + paymentStats.processing}</h4>
                <p style={{ margin: 0, fontSize: '14px' }}>Pending/Processing</p>
              </div>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                <h4 style={{ margin: '0 0 10px 0', color: '#dc3545' }}>{paymentStats.failed}</h4>
                <p style={{ margin: 0, fontSize: '14px' }}>Failed</p>
              </div>
            </div>
          </div>
        </section>

        {/* Status Message */}
        {message && (
          <section style={{ padding: '10px 0' }}>
            <div className="container">
              <div style={{
                padding: '15px',
                backgroundColor: '#fee',
                border: '1px solid #fcc',
                borderRadius: '4px',
                color: '#c33',
                textAlign: 'center'
              }}>
                {message}
              </div>
            </div>
          </section>
        )}

        {/* All Payments Section */}
        <section className="payments-section section-grey">
          <div className="container">
            <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3>All Payments</h3>
              <div>
                <select 
                  value={filter} 
                  onChange={(e) => setFilter(e.target.value as any)}
                  style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
                >
                  <option value="all">All Status</option>
                  <option value="completed">Completed</option>
                  <option value="pending">Pending</option>
                  <option value="failed">Failed</option>
                </select>
                <button 
                  onClick={loadAllPayments}
                  className="btn btn-secondary"
                  style={{ marginLeft: '10px', padding: '8px 16px' }}
                >
                  Refresh
                </button>
              </div>
            </div>
            
            {loading ? (
              <div style={{ textAlign: 'center', padding: '40px' }}>
                <div>Loading payments...</div>
              </div>
            ) : filteredPayments.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px' }}>
                <p>No payments found for the selected filter.</p>
              </div>
            ) : (
              <div className="payment-table-container">
                <div style={{ marginBottom: '10px', fontSize: '14px', color: '#666' }}>
                  Showing {filteredPayments.length} payments 
                  {filter !== 'all' && ` (${filter})`}
                  {filter === 'all' && ` • Total Revenue: $${totalAmount.toFixed(2)}`}
                </div>
                <table className="payment-table">
                  <thead>
                    <tr>
                      <th>USER</th>
                      <th>NAME</th>
                      <th>TYPE</th>
                      <th>METHOD</th>
                      <th>AMOUNT</th>
                      <th>STATUS</th>
                      <th>DATE</th>
                      <th>NOTES</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPayments.map((payment) => (
                      <tr key={payment.id}>
                        <td style={{ fontSize: '12px' }}>{payment.userEmail}</td>
                        <td>{payment.firstName} {payment.lastName}</td>
                        <td style={{ textTransform: 'capitalize' }}>
                          {payment.paymentType.replace('-', ' ')}
                        </td>
                        <td style={{ textTransform: 'capitalize' }}>
                          {payment.paymentMethod.replace('-', ' ')}
                        </td>
                        <td><strong>${payment.amount.toFixed(2)}</strong></td>
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
                        <td style={{ fontSize: '12px' }}>
                          {payment.createdAt.toLocaleDateString()}
                          <br />
                          <span style={{ color: '#666' }}>
                            {payment.createdAt.toLocaleTimeString()}
                          </span>
                        </td>
                        <td style={{ fontSize: '12px', maxWidth: '150px' }}>
                          {payment.notes || '-'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default AdminDashboard
