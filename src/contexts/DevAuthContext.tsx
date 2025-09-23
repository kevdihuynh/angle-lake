import React, { createContext, useContext, useEffect, useState } from 'react'
import { User } from 'firebase/auth'

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

  // Mock user for development
  const mockUser: User = {
    uid: 'dev-user-123',
    email: 'kevdiihuynh@gmail.com',
    displayName: 'Dev User',
    emailVerified: true,
    isAnonymous: false,
    phoneNumber: null,
    photoURL: null,
    providerId: 'firebase',
    metadata: {} as any,
    providerData: [],
    refreshToken: 'mock-refresh-token',
    tenantId: null,
    delete: async () => {},
    getIdToken: async () => 'mock-id-token',
    getIdTokenResult: async () => ({} as any),
    reload: async () => {},
    toJSON: () => ({}),
  } as User

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setCurrentUser(mockUser)
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const sendMagicLink = async (email: string): Promise<void> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log('🚀 DEV MODE: Magic link would be sent to:', email)
    // In dev mode, we're already "signed in" so no need to send actual link
  }

  const signInWithMagicLink = async (email: string, _emailLink: string): Promise<void> => {
    console.log('🚀 DEV MODE: User would be signed in with email:', email)
    // In dev mode, user is already signed in
  }

  const logout = async (): Promise<void> => {
    setCurrentUser(null)
    console.log('🚀 DEV MODE: User signed out')
  }

  // Check if user is coming back from a magic link (dev mode)
  useEffect(() => {
    if (window.location.pathname === '/auth/callback') {
      // Simulate successful sign-in
      setTimeout(() => {
        window.history.replaceState({}, document.title, window.location.pathname)
      }, 1000)
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
