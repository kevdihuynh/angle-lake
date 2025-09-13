import React, { useState, useRef, useEffect } from 'react'
import './Dropdown.css'

export interface DropdownOption {
  value: string
  label: string
  disabled?: boolean
}

export interface DropdownProps {
  options: DropdownOption[]
  value?: string
  placeholder?: string
  onChange: (value: string) => void
  disabled?: boolean
  className?: string
  label?: string
  error?: string
  required?: boolean
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  placeholder = "Select an option",
  onChange,
  disabled = false,
  className = "",
  label,
  error,
  required = false
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const selectedOption = options.find(option => option.value === value)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setFocusedIndex(-1)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault()
        if (!isOpen) {
          setIsOpen(true)
          setFocusedIndex(0)
        } else {
          setFocusedIndex(prev => {
            const nextIndex = prev + 1
            return nextIndex >= options.length ? 0 : nextIndex
          })
        }
        break
      case 'ArrowUp':
        event.preventDefault()
        if (!isOpen) {
          setIsOpen(true)
          setFocusedIndex(options.length - 1)
        } else {
          setFocusedIndex(prev => {
            const prevIndex = prev - 1
            return prevIndex < 0 ? options.length - 1 : prevIndex
          })
        }
        break
      case 'Enter':
      case ' ':
        event.preventDefault()
        if (!isOpen) {
          setIsOpen(true)
        } else if (focusedIndex >= 0) {
          const option = options[focusedIndex]
          if (!option.disabled) {
            onChange(option.value)
            setIsOpen(false)
            setFocusedIndex(-1)
          }
        }
        break
      case 'Escape':
        event.preventDefault()
        setIsOpen(false)
        setFocusedIndex(-1)
        buttonRef.current?.focus()
        break
      case 'Tab':
        setIsOpen(false)
        setFocusedIndex(-1)
        break
    }
  }

  const handleOptionClick = (option: DropdownOption) => {
    if (!option.disabled) {
      onChange(option.value)
      setIsOpen(false)
      setFocusedIndex(-1)
    }
  }

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen)
      setFocusedIndex(-1)
    }
  }

  return (
    <div className={`dropdown-container ${className}`}>
      {label && (
        <label className="dropdown-label">
          {label}
          {required && <span className="required-asterisk">*</span>}
        </label>
      )}
      
      <div 
        className={`dropdown ${isOpen ? 'dropdown-open' : ''} ${disabled ? 'dropdown-disabled' : ''} ${error ? 'dropdown-error' : ''}`}
        ref={dropdownRef}
      >
        <button
          ref={buttonRef}
          type="button"
          className="dropdown-button"
          onClick={toggleDropdown}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-label={label || placeholder}
        >
          <span className="dropdown-button-text">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <svg 
            className={`dropdown-arrow ${isOpen ? 'dropdown-arrow-open' : ''}`}
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none"
            aria-hidden="true"
          >
            <path 
              d="M5 7.5L10 12.5L15 7.5" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="dropdown-menu" role="listbox">
            {options.map((option, index) => (
              <button
                key={option.value}
                type="button"
                className={`dropdown-option ${option.disabled ? 'dropdown-option-disabled' : ''} ${focusedIndex === index ? 'dropdown-option-focused' : ''}`}
                onClick={() => handleOptionClick(option)}
                disabled={option.disabled}
                role="option"
                aria-selected={option.value === value}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {error && (
        <div className="dropdown-error-message" role="alert">
          {error}
        </div>
      )}
    </div>
  )
}

export default Dropdown
