import React, { useState } from 'react'
import { siteConfig, SiteConfig } from './siteConfig'
import './ContentManager.css'

interface ContentManagerProps {
  onConfigUpdate?: (config: SiteConfig) => void
}

const ContentManager: React.FC<ContentManagerProps> = ({ onConfigUpdate }) => {
  const [config, setConfig] = useState<SiteConfig>(siteConfig)
  const [activeTab, setActiveTab] = useState('hero')
  const [showManager, setShowManager] = useState(false)

  // Check if content manager should be enabled
  const isContentManagerEnabled = import.meta.env.VITE_ENABLE_CONTENT_MANAGER === 'true'

  // Don't render anything if content manager is disabled
  if (!isContentManagerEnabled) {
    return null
  }

  // Ensure tab state is preserved
  const handleTabChange = (tabName: string) => {
    console.log('Switching to tab:', tabName) // Debug log
    setActiveTab(tabName)
  }

  const handleConfigUpdate = (section: keyof SiteConfig, updates: any) => {
    const newConfig = { 
      ...config, 
      [section]: { 
        ...(config[section] as any), 
        ...updates 
      } 
    }
    setConfig(newConfig)
    if (onConfigUpdate) {
      onConfigUpdate(newConfig)
    }
  }

  const handleContactUpdate = (index: number, field: keyof typeof config.contactInfo[0], value: string) => {
    const newContactInfo = [...config.contactInfo]
    newContactInfo[index] = { ...newContactInfo[index], [field]: value }
    handleConfigUpdate('contactInfo', newContactInfo)
  }

  const addContact = () => {
    const newContactInfo = [...config.contactInfo, {
      role: '',
      name: '',
      phone: '',
      email: ''
    }]
    handleConfigUpdate('contactInfo', newContactInfo)
  }

  const removeContact = (index: number) => {
    const newContactInfo = config.contactInfo.filter((_, i) => i !== index)
    handleConfigUpdate('contactInfo', newContactInfo)
  }

  const handlePhotoVideoUpdate = (index: number, field: keyof typeof config.photoVideoData[0], value: string) => {
    const newPhotoVideoData = [...config.photoVideoData]
    newPhotoVideoData[index] = { ...newPhotoVideoData[index], [field]: value }
    handleConfigUpdate('photoVideoData', newPhotoVideoData)
  }

  const addPhotoVideo = () => {
    const newPhotoVideoData = [...config.photoVideoData, {
      id: (config.photoVideoData.length + 1).toString(),
      title: '',
      date: '',
      url: '',
      type: 'photo' as const
    }]
    handleConfigUpdate('photoVideoData', newPhotoVideoData)
  }

  const removePhotoVideo = (index: number) => {
    const newPhotoVideoData = config.photoVideoData.filter((_, i) => i !== index)
    handleConfigUpdate('photoVideoData', newPhotoVideoData)
  }

  const handleEventUpdate = (index: number, field: keyof typeof config.eventsData[0], value: string) => {
    const newEventsData = [...config.eventsData]
    newEventsData[index] = { ...newEventsData[index], [field]: value }
    handleConfigUpdate('eventsData', newEventsData)
  }

  const addEvent = () => {
    const newEventsData = [...config.eventsData, {
      id: (config.eventsData.length + 1).toString(),
      title: '',
      datetime: '',
      location: '',
      description: ''
    }]
    handleConfigUpdate('eventsData', newEventsData)
  }

  const removeEvent = (index: number) => {
    const newEventsData = config.eventsData.filter((_, i) => i !== index)
    handleConfigUpdate('eventsData', newEventsData)
  }

  const generateConfigCode = () => {
    return `// Main site configuration file
// This file contains all the configurable content for the website
// Non-developers can easily update content here without touching component code

export interface ContactInfo {
  role: string
  name: string
  phone: string
  email: string
}

export interface ImportantMessage {
  title: string
  lines: string[]
  icon?: string
}

export interface Announcement {
  content: string
  icon?: string
}

export interface MeetingNotice {
  content: string
  icon?: string
}

export interface PDFDocument {
  value: string
  label: string
  url: string
}

export interface SiteConfig {
  // Hero Section
  heroMessage: ImportantMessage
  
  // Announcements
  announcement: Announcement
  
  // Meeting Notice (appears in events section)
  meetingNotice: MeetingNotice
  
  // Contact Information
  contactInfo: ContactInfo[]
  
  // PDF Documents
  newsletters: PDFDocument[]
  meetingNotes: PDFDocument[]
  
  // Default PDF Preview
  defaultMeetingNotes: {
    title: string
    pdfUrl: string
  }
}

// ============================================================================
// CONFIGURABLE CONTENT - UPDATE THESE VALUES AS NEEDED
// ============================================================================

export const siteConfig: SiteConfig = ${JSON.stringify(config, null, 2)}

// Helper function to get the current site configuration
export const getSiteConfig = (): SiteConfig => siteConfig

// Helper function to update specific parts of the config (for future use)
export const updateSiteConfig = (updates: Partial<SiteConfig>): void => {
  Object.assign(siteConfig, updates)
}`
  }

  if (!showManager) {
    return (
      <div className="content-manager-toggle">
        <button 
          className="btn-config-manager"
          onClick={() => setShowManager(true)}
          title="Open Content Manager"
        >
          ⚙️ Content Manager
        </button>
      </div>
    )
  }

  return (
    <div className="content-manager-overlay">
      <div className="content-manager" key="content-manager-main">
        <div className="content-manager-header">
          <h2>📝 Content Manager</h2>
          <p>Update website content without touching code</p>
          <button 
            className="btn-close"
            onClick={() => setShowManager(false)}
          >
            ✕
          </button>
        </div>

        <div className="content-manager-tabs">
          <button 
            className={activeTab === 'hero' ? 'active' : ''}
            onClick={() => handleTabChange('hero')}
          >
            🏠 Hero
          </button>
          <button 
            className={activeTab === 'announcement' ? 'active' : ''}
            onClick={() => handleTabChange('announcement')}
          >
            📢 Announcement
          </button>
          <button 
            className={activeTab === 'contact' ? 'active' : ''}
            onClick={() => handleTabChange('contact')}
          >
            👥 Contact
          </button>
          <button 
            className={activeTab === 'about' ? 'active' : ''}
            onClick={() => handleTabChange('about')}
          >
            📋 About
          </button>
          <button 
            className={activeTab === 'resources' ? 'active' : ''}
            onClick={() => handleTabChange('resources')}
          >
            🔗 Resources
          </button>
          <button 
            className={activeTab === 'payments' ? 'active' : ''}
            onClick={() => handleTabChange('payments')}
          >
            💳 Payments
          </button>
          <button 
            className={activeTab === 'documents' ? 'active' : ''}
            onClick={() => handleTabChange('documents')}
          >
            📄 Documents
          </button>
          <button 
            className={activeTab === 'photos' ? 'active' : ''}
            onClick={() => handleTabChange('photos')}
          >
            📸 Photos/Videos
          </button>
          <button 
            className={activeTab === 'events' ? 'active' : ''}
            onClick={() => handleTabChange('events')}
          >
            📅 Events
          </button>
          <button 
            className={activeTab === 'export' ? 'active' : ''}
            onClick={() => handleTabChange('export')}
          >
            💾 Export
          </button>
        </div>

        <div className="content-manager-body">
          {/* Hero Message Tab */}
          {activeTab === 'hero' && (
            <div className="config-section">
              <h3>Hero Section Message</h3>
              <div className="form-group">
                <label>Title:</label>
                <input 
                  type="text"
                  value={config.heroMessage.title}
                  onChange={(e) => handleConfigUpdate('heroMessage', { title: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Message Lines (one per line):</label>
                <textarea 
                  value={config.heroMessage.lines.join('\n')}
                  onChange={(e) => handleConfigUpdate('heroMessage', { lines: e.target.value.split('\n') })}
                  rows={4}
                />
              </div>
            </div>
          )}

          {/* Announcement Tab */}
          {activeTab === 'announcement' && (
            <div className="config-section">
              <h3>Main Announcement</h3>
              <div className="form-group">
                <label>Announcement Text:</label>
                <textarea 
                  value={config.announcement.content}
                  onChange={(e) => handleConfigUpdate('announcement', { content: e.target.value })}
                  rows={6}
                />
              </div>
            </div>
          )}


          {/* Contact Info Tab */}
          {activeTab === 'contact' && (
            <div className="config-section">
              <h3>Contact Information</h3>
              {config.contactInfo.map((contact, index) => (
                <div key={index} className="contact-form">
                  <div className="contact-header">
                    <h4>Contact #{index + 1}</h4>
                    <button 
                      className="btn-remove"
                      onClick={() => removeContact(index)}
                    >
                      Remove
                    </button>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Role:</label>
                      <input 
                        type="text"
                        value={contact.role}
                        onChange={(e) => handleContactUpdate(index, 'role', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Name:</label>
                      <input 
                        type="text"
                        value={contact.name}
                        onChange={(e) => handleContactUpdate(index, 'name', e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone:</label>
                      <input 
                        type="text"
                        value={contact.phone}
                        onChange={(e) => handleContactUpdate(index, 'phone', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email:</label>
                      <input 
                        type="email"
                        value={contact.email}
                        onChange={(e) => handleContactUpdate(index, 'email', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              ))}
              <button className="btn-add" onClick={addContact}>
                + Add Contact
              </button>
            </div>
          )}

          {/* About Page Tab */}
          {activeTab === 'about' && (
            <div className="config-section">
              <h3>About Page Content</h3>
              <div className="documents-info">
                <p>📋 The About page contains club officers, legal documents, and beach rules.</p>
                <p>To update this content, you'll need to modify the <code>aboutPage</code> section in the configuration file.</p>
                <p>This includes:</p>
                <ul>
                  <li><strong>Club Officers:</strong> Board member information</li>
                  <li><strong>Covenants:</strong> PDF documents and links</li>
                  <li><strong>Bylaws:</strong> Document title and URL</li>
                  <li><strong>Beach Rules:</strong> Posted rules, addendum rules, definitions, and foundation text</li>
                </ul>
              </div>
            </div>
          )}

          {/* Resources Page Tab */}
          {activeTab === 'resources' && (
            <div className="config-section">
              <h3>Resources Page Content</h3>
              <div className="documents-info">
                <p>🔗 The Resources page contains member ads, water data links, and community information.</p>
                <p>To update this content, you'll need to modify the <code>resourcesPage</code> section in the configuration file.</p>
                <p>This includes:</p>
                <ul>
                  <li><strong>Member Ads:</strong> Business listings from community members</li>
                  <li><strong>Water Data Links:</strong> Links to water quality reports and statistics</li>
                  <li><strong>Fishing Links:</strong> Links to fishing guidelines and resources</li>
                  <li><strong>ALM vs ALSC:</strong> Information about both organizations</li>
                  <li><strong>City of SeaTac:</strong> Information about the city</li>
                </ul>
              </div>
            </div>
          )}

          {/* Payments Page Tab */}
          {activeTab === 'payments' && (
            <div className="config-section">
              <h3>Payments Page Content</h3>
              <div className="documents-info">
                <p>💳 The Payments page contains payment forms, history, and treasurer reports.</p>
                <p>To update this content, you'll need to modify the <code>paymentsPage</code> section in the configuration file.</p>
                <p>This includes:</p>
                <ul>
                  <li><strong>Default Form Data:</strong> Pre-filled form values</li>
                  <li><strong>Payment History:</strong> Sample payment records</li>
                  <li><strong>Treasurer Reports:</strong> Document information and content</li>
                </ul>
              </div>
            </div>
          )}

          {/* Documents Tab */}
          {activeTab === 'documents' && (
            <div className="config-section">
              <h3>PDF Documents</h3>
              <div className="documents-info">
                <p>📄 Meeting notes and newsletters are managed in the Events & Media page.</p>
                <p>To add new documents, you'll need to update the <code>meetingNotes</code> and <code>newsletters</code> arrays in the configuration file.</p>
                <p>Each document needs:</p>
                <ul>
                  <li><strong>value:</strong> Unique identifier (e.g., 'december-2024')</li>
                  <li><strong>label:</strong> Display name (e.g., 'December 2024 Meeting')</li>
                  <li><strong>url:</strong> PDF file URL</li>
                </ul>
              </div>
            </div>
          )}

          {/* Photos/Videos Tab */}
          {activeTab === 'photos' && (
            <div className="config-section">
              <h3>Photos & Videos Management</h3>
              <p>Manage photo albums and video links for the Events + Media page.</p>
              
              <div className="section-actions">
                <button className="btn btn-primary" onClick={addPhotoVideo}>
                  ➕ Add New Photo/Video
                </button>
              </div>

              <div className="config-list">
                {config.photoVideoData.map((item, index) => (
                  <div key={item.id} className="config-item">
                    <div className="item-header">
                      <h4>Photo/Video #{index + 1}</h4>
                      <button 
                        className="btn-remove"
                        onClick={() => removePhotoVideo(index)}
                        title="Remove this photo/video"
                      >
                        ✕
                      </button>
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label>Title:</label>
                        <input 
                          type="text"
                          value={item.title}
                          onChange={(e) => handlePhotoVideoUpdate(index, 'title', e.target.value)}
                          placeholder="e.g., 2025 ALSC Tasty Tapas"
                        />
                      </div>
                      <div className="form-group">
                        <label>Date:</label>
                        <input 
                          type="text"
                          value={item.date}
                          onChange={(e) => handlePhotoVideoUpdate(index, 'date', e.target.value)}
                          placeholder="e.g., 2025 or July 4, 2025"
                        />
                      </div>
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label>Type:</label>
                        <select 
                          value={item.type}
                          onChange={(e) => handlePhotoVideoUpdate(index, 'type', e.target.value)}
                        >
                          <option value="photo">Photo</option>
                          <option value="video">Video</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label>URL:</label>
                      <input 
                        type="url"
                        value={item.url}
                        onChange={(e) => handlePhotoVideoUpdate(index, 'url', e.target.value)}
                        placeholder="https://photos.app.goo.gl/... or https://youtu.be/..."
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Events Tab */}
          {activeTab === 'events' && (
            <div className="config-section">
              <h3>Events Management</h3>
              <p>Manage upcoming events and activities for the Homepage and Events + Media page.</p>
              
              <div className="section-actions">
                <button className="btn btn-primary" onClick={addEvent}>
                  ➕ Add New Event
                </button>
              </div>

              <div className="config-list">
                {config.eventsData.map((event, index) => (
                  <div key={event.id} className="config-item">
                    <div className="item-header">
                      <h4>Event #{index + 1}</h4>
                      <button 
                        className="btn-remove"
                        onClick={() => removeEvent(index)}
                        title="Remove this event"
                      >
                        ✕
                      </button>
                    </div>
                    
                    <div className="form-group">
                      <label>Event Title:</label>
                      <input 
                        type="text"
                        value={event.title}
                        onChange={(e) => handleEventUpdate(index, 'title', e.target.value)}
                        placeholder="e.g., ALM Polar Plunge & Brunch"
                      />
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label>Date & Time:</label>
                        <input 
                          type="text"
                          value={event.datetime}
                          onChange={(e) => handleEventUpdate(index, 'datetime', e.target.value)}
                          placeholder="e.g., 11 am, January 1"
                        />
                      </div>
                      <div className="form-group">
                        <label>Location:</label>
                        <input 
                          type="text"
                          value={event.location}
                          onChange={(e) => handleEventUpdate(index, 'location', e.target.value)}
                          placeholder="e.g., ALM Community Beach Lot"
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label>Description:</label>
                      <textarea 
                        value={event.description}
                        onChange={(e) => handleEventUpdate(index, 'description', e.target.value)}
                        placeholder="Detailed description of the event..."
                        rows={3}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Export Tab */}
          {activeTab === 'export' && (
            <div className="config-section">
              <h3>Export Configuration</h3>
              <div className="export-info">
                <p><strong>Instructions:</strong></p>
                <ol>
                  <li>Copy the complete code below</li>
                  <li>Open <code>src/config/siteConfig.ts</code> in your text editor</li>
                  <li>Replace the entire file content with the copied code</li>
                  <li>Save the file</li>
                  <li>Refresh your browser to see the changes</li>
                </ol>
                <p><strong>Complete code to copy:</strong></p>
                <textarea 
                  value={generateConfigCode()}
                  readOnly
                  className="export-code"
                  rows={20}
                />
                <button 
                  className="btn-copy"
                  onClick={() => navigator.clipboard.writeText(generateConfigCode())}
                >
                  📋 Copy to Clipboard
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="content-manager-footer">
          <button 
            className="btn-preview"
            onClick={() => window.location.reload()}
          >
            🔄 Refresh Page to Preview Changes
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContentManager
