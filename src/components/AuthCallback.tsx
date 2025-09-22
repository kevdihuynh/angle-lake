import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const AuthCallback: React.FC = () => {
  const [message, setMessage] = useState('Processing your sign-in...')
  const navigate = useNavigate()
  const { currentUser } = useAuth()

  useEffect(() => {
    if (currentUser) {
      setMessage('Sign-in successful! Redirecting...')
      setTimeout(() => {
        navigate('/payments')
      }, 2000)
    }
  }, [currentUser, navigate])

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      flexDirection: 'column',
      gap: '20px'
    }}>
      <div style={{ 
        fontSize: '18px',
        textAlign: 'center'
      }}>
        {message}
      </div>
      <div style={{
        width: '40px',
        height: '40px',
        border: '4px solid #f3f3f3',
        borderTop: '4px solid #3498db',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export default AuthCallback
