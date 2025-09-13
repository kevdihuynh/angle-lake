import React, { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './NavDropdown.css'

export interface NavDropdownItem {
  label: string
  path: string
  external?: boolean
}

export interface NavDropdownProps {
  label: string
  items: NavDropdownItem[]
  isActive?: boolean
  className?: string
}

const NavDropdown: React.FC<NavDropdownProps> = ({
  label,
  items,
  isActive = false,
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [hoverTimeout, setHoverTimeout] = useState<number | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout)
      }
    }
  }, [hoverTimeout])

  const handleMouseEnter = () => {
    // if (hoverTimeout) {
    //   clearTimeout(hoverTimeout)
    //   setHoverTimeout(null)
    // }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    // const timeout = setTimeout(() => {
      setIsOpen(false)
    // }, 200) // Increased delay to prevent flickering
    // setHoverTimeout(timeout)
  }

  const handleItemClick = (item: NavDropdownItem) => {
    setIsOpen(false)
    
    // Handle anchor links for smooth scrolling
    if (item.path.includes('#')) {
      const [path, anchor] = item.path.split('#')
      
      // If we're on the same page, scroll to the section
      if (path === '' || path === '/' || path === location.pathname) {
        setTimeout(() => {
          const element = document.getElementById(anchor)
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            })
          }
        }, 100) // Small delay to ensure dropdown closes first
      }
    }
  }

  return (
    <div 
      className={`nav-dropdown ${className}`}
      ref={dropdownRef}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      <button
        className={`nav-dropdown-trigger ${isActive ? 'active' : ''}`}
        onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
      >
        {label}
      </button>

      {isOpen && (
        <div 
          className="nav-dropdown-menu"
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
        >
          {items.map((item, index) => (
            <div key={index} className="nav-dropdown-item">
              {item.external ? (
                <a 
                  href={item.path} 
                  className="nav-dropdown-link"
                  onClick={() => handleItemClick(item)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              ) : (
                <Link 
                  to={item.path} 
                  className="nav-dropdown-link"
                  onClick={() => handleItemClick(item)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default NavDropdown
