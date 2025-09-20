import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import NavDropdown from './NavDropdown'
import { siteConfig } from '../config/siteConfig'
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

  // Use navigation data from configuration
  const { home: homeItems, about: aboutItems, payments: paymentsItems, resources: resourcesItems, eventsMedia: eventsMediaItems } = siteConfig.navigation

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/" className="logo-link">
              <h2>{siteConfig.siteTitle}</h2>
              <span className="logo-subtitle">{siteConfig.siteSubtitle}</span>
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
              <li style={{ display: 'none' }}>
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
