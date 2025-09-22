import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import Header from './Header'
import Footer from './Footer'
import './Header.css'
import './Footer.css'

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const { sendMagicLink } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setMessage('Please enter your email address.')
      return
    }

    setLoading(true)
    setMessage('')

    try {
      await sendMagicLink(email)
      setMessage(`A magic link has been sent to ${email}. Please check your email and click the link to sign in.`)
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error sending magic link. Please try again.'
      setMessage(errorMessage)
      console.error('Magic link error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <section className="login-section section-white">
          <div className="container">
            <div className="section-header">
              <h2>SIGN IN TO YOUR ACCOUNT</h2>
              <p>Enter your email address to receive a secure sign-in link</p>
            </div>
            
            <div style={{ maxWidth: '400px', margin: '0 auto' }}>
              <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      fontSize: '16px'
                    }}
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={loading}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontSize: '16px',
                    opacity: loading ? 0.7 : 1
                  }}
                >
                  {loading ? 'Sending...' : 'Send Magic Link'}
                </button>
              </form>

              {message && (
                <div style={{
                  marginTop: '20px',
                  padding: '15px',
                  backgroundColor: message.includes('Error') ? '#fee' : '#efe',
                  border: `1px solid ${message.includes('Error') ? '#fcc' : '#cfc'}`,
                  borderRadius: '4px',
                  color: message.includes('Error') ? '#c33' : '#363',
                  textAlign: 'center'
                }}>
                  {message}
                </div>
              )}

              <div style={{
                marginTop: '30px',
                textAlign: 'center',
                fontSize: '14px',
                color: '#666'
              }}>
                <p>
                  <strong>What is a magic link?</strong><br />
                  A magic link is a secure, password-free way to sign in. 
                  Simply enter your email above, and we'll send you a special link. 
                  Click the link in your email to instantly sign in to your account.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default LoginPage
