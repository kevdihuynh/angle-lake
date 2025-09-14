import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { eventsData } from '../data/eventsData'
import { photoVideoData } from '../data/photoVideoData'
import './Header.css'
import './Footer.css'



const EventsMediaPage: React.FC = () => {
  const [selectedNewsletter, setSelectedNewsletter] = useState('january-2024')
  const [selectedMeetingNotes, setSelectedMeetingNotes] = useState('august-2025')
  const [showAllAlbums, setShowAllAlbums] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [showAllEvents, setShowAllEvents] = useState(false)
  const [eventSearchQuery, setEventSearchQuery] = useState('')



  // Filter events based on search query
  const filteredEvents = eventsData.filter(event => 
    event.title.toLowerCase().includes(eventSearchQuery.toLowerCase())
  )

  // Get events to display (first 3 or all based on showAllEvents)
  const displayedEvents = showAllEvents ? filteredEvents : filteredEvents.slice(0, 3)

  // Filter cards based on search query
  const filteredCards = photoVideoData.filter(card => 
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Get cards to display (first 3 or all based on showAllAlbums)
  const displayedCards = showAllAlbums ? filteredCards : filteredCards.slice(0, 3)

  const handleCardClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const newsletterOptions = [
    { value: 'january-2024', label: 'January, 2024' },
    { value: 'february-2021', label: 'February, 2021' },
    { value: 'december-2019', label: 'December, 2019' },
    { value: 'may-2017', label: 'May 2017' }
  ]

  // Meeting notes data extracted from https://anglelakemanor.com/minutes.htm
  const meetingNotesOptions = [
    { value: 'august-2025', label: 'August 2025 Meeting', url: 'https://anglelakemanor.com/Minutes/ALMAug2025.pdf' },
    { value: 'april-2025', label: 'April 2025 Meeting', url: 'https://anglelakemanor.com/Minutes/ALMApr2025.pdf' },
    { value: 'february-2025', label: 'February 2025 Meeting', url: 'https://anglelakemanor.com/Minutes/ALMFeb2025.pdf' },
    { value: 'december-2024', label: 'December 2024 Meeting', url: 'https://anglelakemanor.com/Minutes/ALMDec2024.pdf' },
    { value: 'october-2024', label: 'October 2024 Meeting', url: 'https://anglelakemanor.com/Minutes/ALMOct2024.pdf' },
    { value: 'august-2024', label: 'August 2024 Meeting', url: 'https://anglelakemanor.com/Minutes/ALMAug2024.pdf' },
    { value: 'june-2024', label: 'June 2024 Meeting', url: 'https://anglelakemanor.com/Minutes/ALMJun2024.pdf' },
    { value: 'february-2024', label: 'February 2024 Meeting', url: 'https://anglelakemanor.com/Minutes/ALMFeb2024.pdf' },
    { value: 'december-2023', label: 'December 2023 Meeting', url: 'https://anglelakemanor.com/Minutes/ALMDec2023.pdf' },
    { value: 'october-2023', label: 'October 2023 Meeting', url: 'https://anglelakemanor.com/Minutes/ALMOct2023.pdf' },
    { value: 'august-2023', label: 'August 2023 Meeting', url: 'https://anglelakemanor.com/Minutes/ALMAug2023.pdf' },
    { value: 'june-2023', label: 'June 2023 Meeting', url: 'https://anglelakemanor.com/Minutes/ALMJun2023.pdf' },
    { value: 'april-2023', label: 'April 2023 Meeting', url: 'https://anglelakemanor.com/Minutes/ALMApr2023.pdf' },
    { value: 'february-2023', label: 'February 2023 Meeting', url: 'https://anglelakemanor.com/Minutes/ALMFeb2023.pdf' },
    { value: 'december-2022', label: 'December 2022 Meeting', url: 'https://anglelakemanor.com/Minutes/ALMDec2022.pdf' },
    { value: 'october-2022', label: 'October 2022 Meeting', url: 'https://anglelakemanor.com/Minutes/ALMOct2022.pdf' },
    { value: 'august-2022', label: 'August 2022 Meeting', url: 'https://anglelakemanor.com/Minutes/ALMAug2022.pdf' },
    { value: 'may-2022', label: 'May 2022 Meeting', url: 'https://anglelakemanor.com/Minutes/ALMMay2022.pdf' },
    { value: 'february-2022', label: 'February 2022 Meeting', url: 'https://anglelakemanor.com/Minutes/ALMFeb2022.pdf' },
    { value: 'october-2021', label: 'October 2021 Meeting', url: 'https://anglelakemanor.com/Minutes/ALMOct2021.pdf' },
    { value: 'august-2021', label: 'August 2021 Meeting', url: 'https://anglelakemanor.com/Minutes/ALMAug2021.pdf' },
    { value: 'july-2021', label: 'July 2021 Special Meeting', url: 'https://anglelakemanor.com/Minutes/ALMJuly2021.pdf' },
    { value: 'june-2021', label: 'June 2021 Meeting', url: 'https://anglelakemanor.com/Minutes/ALMJune2021.pdf' },
    { value: 'april-2021', label: 'April 2021 Meeting', url: 'https://anglelakemanor.com/Minutes/ALMApr2021.pdf' }
  ]

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        {/* Events Section */}
        <section id="events" className="events-section">
          <div className="container">
            <div className="section-header">
              <h2>EVENTS</h2>
            </div>
            
            {/* Search Bar */}
            <div className="search-bar">
              <div className="search-icon">🔍</div>
              <input 
                type="text" 
                placeholder="Search for events..." 
                value={eventSearchQuery}
                onChange={(e) => setEventSearchQuery(e.target.value)}
              />
            </div>

            {/* Event Cards */}
            <div className="events-grid">
              {displayedEvents.map((event) => (
                <div key={event.id} className="event-card">
                  <div className="event-header">
                    <div className="event-datetime">{event.datetime}</div>
                    <div className="event-location">{event.location}</div>
                  </div>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              ))}
            </div>
            
            {filteredEvents.length > 3 && (
              <div className="section-button">
                <button 
                  className="btn btn-primary"
                  onClick={() => setShowAllEvents(!showAllEvents)}
                >
                  {showAllEvents ? 'SHOW LESS EVENTS' : `SHOW MORE EVENTS (${filteredEvents.length - 3} more)`}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Photos & Videos Section */}
        <section id="photos-videos" className="photos-videos-section">
          <div className="container">
            <div className="section-header">
              <h2>PHOTOS & VIDEOS</h2>
            </div>
            
            {/* Search Bar */}
            <div className="search-bar">
              <div className="search-icon">🔍</div>
              <input 
                type="text" 
                placeholder="Search for photos and videos..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Photo/Video Cards */}
            <div className="albums-grid">
              {displayedCards.map((card) => (
                <div 
                  key={card.id} 
                  className="album-card"
                  onClick={() => handleCardClick(card.url)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="album-thumbnail">
                    <img 
                      src={card.type === 'video' 
                        ? `https://png.pngtree.com/png-vector/20250220/ourlarge/pngtree-video-recorder-flat-icon-vector-png-image_15531695.png`
                        : `https://tse2.mm.bing.net/th/id/OIP.ZL3bhWilBtwGsVTmiszcJgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3`
                      } 
                      alt={card.title} 
                    />
                    {card.type === 'video' && (
                      <div className="video-indicator">
                        <span>▶</span>
                      </div>
                    )}
                  </div>
                  <div className="album-info">
                    <h4>{card.title}</h4>
                    <p>{card.date}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredCards.length > 3 && (
              <div className="section-button">
                <button 
                  className="btn btn-primary"
                  onClick={() => setShowAllAlbums(!showAllAlbums)}
                >
                  {showAllAlbums ? 'SHOW LESS ALBUMS' : `SHOW MORE ALBUMS (${filteredCards.length - 3} more)`}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletters Section */}
        <section id="newsletters" className="newsletters-section">
          <div className="container">
            <div className="section-header">
              <h2>NEWSLETTERS</h2>
            </div>
            
            {/* Viewing Selector */}
            <div className="viewing-selector">
              <span>Viewing</span>
              <select 
                value={selectedNewsletter} 
                onChange={(e) => setSelectedNewsletter(e.target.value)}
                className="dropdown"
              >
                {newsletterOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <span className="newsletter-title">ALM Newsletter</span>
            </div>

            {/* PDF Viewer */}
            <div className="pdf-viewer">
              <div className="pdf-header">
                <h4>ALM Meeting Minutes October 26, 2023</h4>
              </div>
              <div className="pdf-embed-container">
                <iframe
                  src="https://anglelakemanor.com/Minutes/ALMAug2025.pdf#toolbar=1&navpanes=1&scrollbar=1"
                  width="100%"
                  height="600px"
                  title="ALM Newsletter"
                  className="pdf-iframe"
                />
              </div>
            </div>
            
            <div className="section-button">
              <button className="btn btn-primary">DOWNLOAD NEWSLETTER</button>
            </div>
          </div>
        </section>

        {/* Meeting Notes Section */}
        <section id="meeting-notes" className="meeting-notes-section">
          <div className="container">
            <div className="section-header">
              <h2>MEETING NOTES</h2>
            </div>
            
            {/* Viewing Selector */}
            <div className="viewing-selector">
              <span>Viewing</span>
              <select 
                value={selectedMeetingNotes} 
                onChange={(e) => setSelectedMeetingNotes(e.target.value)}
                className="dropdown"
              >
                {meetingNotesOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <span className="newsletter-title">ALM Meeting Notes</span>
            </div>

            {/* PDF Viewer */}
            <div className="pdf-viewer">
              <div className="pdf-header">
                <h4>{meetingNotesOptions.find(opt => opt.value === selectedMeetingNotes)?.label}</h4>
              </div>
              <div className="pdf-embed-container">
                <iframe
                  src={`${meetingNotesOptions.find(opt => opt.value === selectedMeetingNotes)?.url}#toolbar=1&navpanes=1&scrollbar=1`}
                  width="100%"
                  height="600px"
                  title="ALM Meeting Notes"
                  className="pdf-iframe"
                />
              </div>
            </div>
            
            <div className="section-button">
              <a 
                href={meetingNotesOptions.find(opt => opt.value === selectedMeetingNotes)?.url}
                download={`${meetingNotesOptions.find(opt => opt.value === selectedMeetingNotes)?.label.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`}
                className="btn btn-primary"
              >
                DOWNLOAD MEETING NOTES
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default EventsMediaPage
