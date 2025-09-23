import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useAuth as useDevAuth } from '../contexts/DevAuthContext'
import { siteConfig } from '../config/siteConfig'

interface ProtectedRouteProps {
  children: React.ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  // Try to use dev auth first, fallback to regular auth
  let currentUser, loading
  try {
    const devAuth = useDevAuth()
    currentUser = devAuth.currentUser
    loading = devAuth.loading
  } catch {
    const auth = useAuth()
    currentUser = auth.currentUser
    loading = auth.loading
  }

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
      }}>
        <div>Loading...</div>
      </div>
    )
  }

  if (!currentUser) {
    return <Navigate to="/login" replace />
  }

  // Check if user is authorized
  const authorizedEmails = siteConfig.authorizedUsers.emails
  const adminEmails = siteConfig.authorizedUsers.adminEmails
  const allAuthorizedEmails = [...authorizedEmails, ...adminEmails]
  
  if (!allAuthorizedEmails.includes(currentUser.email?.toLowerCase() || '')) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        flexDirection: 'column',
        gap: '20px',
        padding: '20px',
        textAlign: 'center'
      }}>
        <h2>Access Denied</h2>
        <p>Your email address ({currentUser.email}) is not authorized to access this section.</p>
        <p>Please contact the administrator if you believe this is an error.</p>
        <button 
          onClick={() => window.location.href = '/'}
          style={{
            padding: '10px 20px',
            backgroundColor: '#3182ce',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Return to Home
        </button>
      </div>
    )
  }

  return <>{children}</>
}

export default ProtectedRoute
