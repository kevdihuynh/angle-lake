import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { AuthProvider as DevAuthProvider } from './contexts/DevAuthContext'
import HomePage from './components/HomePage'
import ResourcesPage from './components/ResourcesPage'
import PaymentsPage from './components/PaymentsPage'
import AboutPage from './components/AboutPage'
import EventsMediaPage from './components/EventsMediaPage'
import LoginPage from './components/LoginPage'
import AuthCallback from './components/AuthCallback'
import AdminDashboard from './components/AdminDashboard'
import ProtectedRoute from './components/ProtectedRoute'
import UnderConstruction from './components/UnderConstruction'
import './styles/App.css'

function App() {
  // Check if we're in development mode with auth bypass
  const skipAuth = import.meta.env.VITE_SKIP_AUTH === 'true'
  
  // Control whether payments page shows under construction
  const underPaymentConstruction = true

  if (skipAuth) {
    return (
      <DevAuthProvider>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/auth/callback" element={<AuthCallback />} />
              <Route 
                path="/payments" 
                element={
                  underPaymentConstruction ? (
                    <UnderConstruction />
                  ) : (
                    <ProtectedRoute>
                      <PaymentsPage />
                    </ProtectedRoute>
                  )
                } 
              />
              <Route 
                path="/admin" 
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/events-media" element={<EventsMediaPage />} />
            </Routes>
          </div>
        </Router>
      </DevAuthProvider>
    )
  }

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/auth/callback" element={<AuthCallback />} />
            <Route 
              path="/payments" 
              element={
                underPaymentConstruction ? (
                  <UnderConstruction />
                ) : (
                  <ProtectedRoute>
                    <PaymentsPage />
                  </ProtectedRoute>
                )
              } 
            />
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/events-media" element={<EventsMediaPage />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
