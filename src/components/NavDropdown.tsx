import React, { useState, useRef, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
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
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<number | null>(null)
  const location = useLocation()
  const navigate = useNavigate()

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
      // Clean up timeout on unmount
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  // Handle scrolling to anchor when location changes
  useEffect(() => {
    if (location.hash) {
      const anchor = location.hash.substring(1) // Remove the # symbol
      setTimeout(() => {
        const element = document.getElementById(anchor)
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          })
        }
      }, 100)
    }
  }, [location])


  const handleMouseEnter = () => {
    // Clear any pending close timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    // Add a small delay before closing to prevent flickering
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 150)
  }

  const handleItemClick = (item: NavDropdownItem) => {
    setIsOpen(false)
    
    // Handle external links
    if (item.external) {
      window.open(item.path, '_blank', 'noopener,noreferrer')
      return
    }
    
    // Handle anchor links for smooth scrolling
    if (item.path.includes('#')) {
      const [path, anchor] = item.path.split('#')
      
      // If we're on the same page, scroll to the section
      if ((path === '' || path === '/') && location.pathname === '/') {
        setTimeout(() => {
          const element = document.getElementById(anchor)
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            })
          }
        }, 100) // Small delay to ensure dropdown closes first
      } else {
        // Navigate to different page with anchor
        navigate(item.path)
      }
    } else {
      // Navigate to regular path
      navigate(item.path)
    }
  }

  const handleTriggerClick = () => {
    if (items.length > 0) {
      // Navigate to the first item in the dropdown
      handleItemClick(items[0])
    }
  }

  return (
    <div 
      className={`nav-dropdown ${className}`}
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`nav-dropdown-trigger ${isActive ? 'active' : ''}`}
        onClick={handleTriggerClick}
      >
        {label}
      </button>

      {isOpen && (
        <div 
          className="nav-dropdown-menu"
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
