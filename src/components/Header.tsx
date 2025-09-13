import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import NavDropdown, { NavDropdownItem } from './NavDropdown'
import './Header.css'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path: string) => {
    return location.pathname === path
  }

  // Navigation dropdown data based on the Figma design
  const homeItems: NavDropdownItem[] = [
    { label: 'Announcements', path: '/#announcements' },
    { label: 'Upcoming Events', path: '/#events' },
    { label: 'Recent Photos', path: '/#photos' },
    { label: 'Recent Meeting Notes', path: '/#meeting-notes' },
    { label: 'Contact Us', path: '/#contact' }
  ]

  const aboutItems: NavDropdownItem[] = [
    { label: 'Club Officers', path: '/about#officers' },
    { label: 'Legal (Covenants, Bylaws, etc.)', path: '/about#legal' },
    { label: 'Beach Lot Rules', path: '/about#beach-rules' }
  ]

  const paymentsItems: NavDropdownItem[] = [
    { label: 'Pay My Dues', path: '/payments#pay-dues' },
    { label: 'Have I Paid My Dues?', path: '/payments#payment-status' },
    { label: 'Donate', path: '/payments#donate' },
    { label: "Treasurer's Reports", path: '/payments#treasurer-reports' }
  ]

  const resourcesItems: NavDropdownItem[] = [
    { label: 'ALM Member Ads', path: '/resources#member-ads' },
    { label: 'Angle Lake Information & Water Data', path: '/resources#water-data' },
    { label: 'Fishing Guidelines', path: '/resources#fishing-guidelines' },
    { label: 'Angle Lake Manor vs ALSC', path: '/resources#alm-vs-alsc' },
    { label: 'City of SeaTac', path: '/resources#city-seatac' }
  ]

  const eventsMediaItems: NavDropdownItem[] = [
    { label: 'Events', path: '/events-media#events' },
    { label: 'Photos & Videos', path: '/events-media#photos-videos' },
    { label: 'Newsletters', path: '/events-media#newsletters' },
    { label: 'Meeting Notes', path: '/events-media#meeting-notes' }
  ]

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/" className="logo-link">
              <h2>ANGLE LAKE MANOR</h2>
              <span className="logo-subtitle">COMMUNITY CLUB</span>
            </Link>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li>
                <NavDropdown 
                  label="HOME" 
                  items={homeItems}
                  isActive={isActive('/')}
                />
              </li>
              <li>
                <NavDropdown 
                  label="ABOUT" 
                  items={aboutItems}
                  isActive={isActive('/about')}
                />
              </li>
              <li>
                <NavDropdown 
                  label="PAYMENTS" 
                  items={paymentsItems}
                  isActive={isActive('/payments')}
                />
              </li>
              <li>
                <NavDropdown 
                  label="RESOURCES" 
                  items={resourcesItems}
                  isActive={isActive('/resources')}
                />
              </li>
              <li>
                <NavDropdown 
                  label="EVENTS + MEDIA" 
                  items={eventsMediaItems}
                  isActive={isActive('/events-media')}
                />
              </li>
            </ul>
          </nav>

          <button 
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
