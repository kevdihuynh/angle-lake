import React, { createContext, useContext, useEffect, useState } from 'react'
import { 
  User,
  onAuthStateChanged,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  signOut
} from 'firebase/auth'
import { auth } from '../config/firebase'
import { siteConfig } from '../config/siteConfig'

interface AuthContextType {
  currentUser: User | null
  loading: boolean
  sendMagicLink: (email: string) => Promise<void>
  signInWithMagicLink: (email: string, emailLink: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  const sendMagicLink = async (email: string): Promise<void> => {
    // Check if email is authorized
    const authorizedEmails = siteConfig.authorizedUsers.emails
    const adminEmails = siteConfig.authorizedUsers.adminEmails
    const allAuthorizedEmails = [...authorizedEmails, ...adminEmails]
    
    if (!allAuthorizedEmails.includes(email.toLowerCase())) {
      throw new Error('This email address is not authorized to access the payments system. Please contact the administrator.')
    }

    const actionCodeSettings = {
      // URL you want to redirect back to after the user clicks the link
      url: `${window.location.origin}/auth/callback`,
      // This must be true for email link sign-in
      handleCodeInApp: true,
    }

    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings)
      // Save the email locally so you can use it when the user comes back
      window.localStorage.setItem('emailForSignIn', email)
    } catch (error) {
      console.error('Error sending magic link:', error)
      throw error
    }
  }

  const signInWithMagicLink = async (email: string, emailLink: string): Promise<void> => {
    try {
      await signInWithEmailLink(auth, email, emailLink)
      // Clear the email from storage
      window.localStorage.removeItem('emailForSignIn')
    } catch (error) {
      console.error('Error signing in with magic link:', error)
      throw error
    }
  }

  const logout = async (): Promise<void> => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error('Error signing out:', error)
      throw error
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  // Check if user is coming back from a magic link
  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      // Get the email if available from storage
      let email = window.localStorage.getItem('emailForSignIn')
      if (!email) {
        // If missing, prompt the user for their email
        email = window.prompt('Please provide your email for confirmation')
      }
      
      if (email) {
        signInWithMagicLink(email, window.location.href)
          .then(() => {
            // Clear the URL to remove the magic link parameters
            window.history.replaceState({}, document.title, window.location.pathname)
          })
          .catch((error) => {
            console.error('Error completing magic link sign-in:', error)
          })
      }
    }
  }, [])

  const value: AuthContextType = {
    currentUser,
    loading,
    sendMagicLink,
    signInWithMagicLink,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
