import React from 'react'
import './PDFPreview.css'

export interface PDFOption {
  value: string
  label: string
  url?: string
}

export interface PDFPreviewProps {
  title: string
  selectedValue?: string
  options?: PDFOption[]
  onSelectionChange?: (value: string) => void
  pdfUrl?: string
  downloadUrl?: string
  downloadButtonText?: string
  showSelector?: boolean
  showDownloadButton?: boolean
  showFallback?: boolean
}

const PDFPreview: React.FC<PDFPreviewProps> = ({
  title,
  selectedValue,
  options = [],
  onSelectionChange,
  pdfUrl,
  downloadUrl,
  downloadButtonText = "DOWNLOAD",
  showSelector = false,
  showDownloadButton = true,
  showFallback = false
}) => {
  // Get the current PDF URL - either from direct pdfUrl prop or from selected option
  const getCurrentPdfUrl = () => {
    if (pdfUrl) {
      return pdfUrl
    }
    
    if (showSelector && selectedValue && options.length > 0) {
      const selectedOption = options.find(option => option.value === selectedValue)
      return selectedOption?.url || ''
    }
    
    return ''
  }

  // Get the current PDF title - either from selected option or use the title prop
  const getCurrentTitle = () => {
    if (showSelector && selectedValue && options.length > 0) {
      const selectedOption = options.find(option => option.value === selectedValue)
      return selectedOption?.label || title
    }
    return title
  }

  // Get download URL
  const getDownloadUrl = () => {
    if (downloadUrl) {
      return downloadUrl
    }
    
    if (showSelector && selectedValue && options.length > 0) {
      const selectedOption = options.find(option => option.value === selectedValue)
      return selectedOption?.url || ''
    }
    
    return getCurrentPdfUrl()
  }

  // Get download filename
  const getDownloadFilename = () => {
    const currentTitle = getCurrentTitle()
    return currentTitle.replace(/[^a-zA-Z0-9]/g, '_') + '.pdf'
  }

  const currentPdfUrl = getCurrentPdfUrl()
  const currentTitle = getCurrentTitle()
  const downloadUrlFinal = getDownloadUrl()

  return (
    <div className="pdf-preview-container">
      {/* Viewing Selector (optional) */}
      {showSelector && options.length > 0 && (
        <div className="viewing-selector">
          <span>Viewing</span>
          <select 
            value={selectedValue || ''} 
            onChange={(e) => onSelectionChange?.(e.target.value)}
            className="dropdown"
          >
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <span className="pdf-type-title">{title}</span>
        </div>
      )}

      {/* PDF Viewer */}
      <div className="pdf-viewer">
        <div className="pdf-header">
          <h4>{currentTitle}</h4>
        </div>
        <div className="pdf-embed-container">
          <iframe
            src={`${currentPdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
            width="100%"
            height="600px"
            title={currentTitle}
            className="pdf-iframe"
          />
        </div>
        
        {/* PDF Fallback (optional) */}
        {showFallback && (
          <div className="pdf-fallback">
            <p>If the PDF doesn't load, you can <a href={currentPdfUrl} target="_blank" rel="noopener noreferrer">view it directly here</a>.</p>
          </div>
        )}
      </div>
      
      {/* Download Button (optional) */}
      {showDownloadButton && downloadUrlFinal && (
        <div className="section-button">
          <a 
            href={downloadUrlFinal}
            download={getDownloadFilename()}
            className="btn btn-primary"
          >
            {downloadButtonText}
          </a>
        </div>
      )}
    </div>
  )
}

export default PDFPreview
