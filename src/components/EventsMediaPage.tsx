import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Card, { CardData } from './Card'
import PDFPreview, { PDFOption } from './PDFPreview'
// import { eventsData } from '../data/eventsData' // Now using siteConfig
// import { photoVideoData } from '../data/photoVideoData' // Now using siteConfig
import { siteConfig } from '../config/siteConfig'
import './Header.css'
import './Footer.css'
import './Card.css'
import './PDFPreview.css'



const EventsMediaPage: React.FC = () => {
  const [selectedNewsletter, setSelectedNewsletter] = useState('january-2024')
  const [selectedMeetingNotes, setSelectedMeetingNotes] = useState('august-2025')
  const [showAllAlbums, setShowAllAlbums] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [showAllEvents, setShowAllEvents] = useState(false)
  const [eventSearchQuery, setEventSearchQuery] = useState('')



  // Filter events based on search query
  const filteredEvents = siteConfig.eventsData.filter(event => 
    event.title.toLowerCase().includes(eventSearchQuery.toLowerCase())
  )

  // Get events to display (first 3 or all based on showAllEvents)
  const displayedEvents = showAllEvents ? filteredEvents : filteredEvents.slice(0, 3)

  // Filter cards based on search query
  const filteredCards = siteConfig.photoVideoData.filter(card => 
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Get cards to display (first 3 or all based on showAllAlbums)
  const displayedCards = showAllAlbums ? filteredCards : filteredCards.slice(0, 3)

  const handleCardClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  // Convert events data to CardData format
  const eventCards: CardData[] = displayedEvents.map(event => ({
    id: event.id,
    title: event.title,
    description: event.description,
    datetime: event.datetime,
    location: event.location
  }))

  // Convert photo/video data to CardData format
  const photoVideoCards: CardData[] = displayedCards.map(card => ({
    id: card.id,
    title: card.title,
    date: card.date,
    url: card.url,
    type: card.type as 'video' | 'photo'
  }))

  // Use configuration data for PDF options
  const newsletterOptions: PDFOption[] = siteConfig.newsletters
  const meetingNotesOptions: PDFOption[] = siteConfig.meetingNotes

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        {/* Events Section */}
        <section id="events" className="events-section section-white">
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
              {eventCards.map((card) => (
                <Card
                  key={card.id}
                  data={card}
                  variant="event"
                />
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
        <section id="photos-videos" className="photos-videos-section section-grey">
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
              {photoVideoCards.map((card) => (
                <Card
                  key={card.id}
                  data={card}
                  variant="photo-video"
                  onClick={() => handleCardClick(card.url!)}
                />
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
        <section id="newsletters" className="newsletters-section section-white">
          <div className="container">
            <div className="section-header">
              <h2>NEWSLETTERS</h2>
            </div>
            
            <PDFPreview
              title="ALM Newsletter"
              selectedValue={selectedNewsletter}
              options={newsletterOptions}
              onSelectionChange={setSelectedNewsletter}
              downloadButtonText="DOWNLOAD NEWSLETTER"
              showSelector={true}
              showDownloadButton={true}
            />
          </div>
        </section>

        {/* Meeting Notes Section */}
        <section id="meeting-notes" className="meeting-notes-section section-grey">
          <div className="container">
            <div className="section-header">
              <h2>MEETING NOTES</h2>
            </div>
            
            <PDFPreview
              title="ALM Meeting Notes"
              selectedValue={selectedMeetingNotes}
              options={meetingNotesOptions}
              onSelectionChange={setSelectedMeetingNotes}
              downloadButtonText="DOWNLOAD MEETING NOTES"
              showSelector={true}
              showDownloadButton={true}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default EventsMediaPage
