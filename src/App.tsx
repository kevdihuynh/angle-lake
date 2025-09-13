// React import not needed in newer versions
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import ResourcesPage from './components/ResourcesPage'
import PaymentsPage from './components/PaymentsPage'
import AboutPage from './components/AboutPage'
import EventsMediaPage from './components/EventsMediaPage'
// import AuthCallback from './components/AuthCallback'
import './styles/App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/payments" element={<PaymentsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/events-media" element={<EventsMediaPage />} />
          {/* <Route path="/auth/callback" element={<AuthCallback />} /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
