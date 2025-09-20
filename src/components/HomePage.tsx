import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Card, { CardData } from './Card'
import PDFPreview from './PDFPreview'
// import ContentManager from '../config/ContentManager'
import { eventsData } from '../data/eventsData'
import { photoVideoData } from '../data/photoVideoData'
import { siteConfig } from '../config/siteConfig'
import './Header.css'
import './Footer.css'
import './Card.css'
import './PDFPreview.css'

const HomePage: React.FC = () => {
  const navigate = useNavigate()


  const handleViewMoreEvents = () => {
    navigate('/events-media#events')
  }

  const handleViewMorePhotos = () => {
    navigate('/events-media#photos-videos')
  }

  const handleViewMoreMeetingNotes = () => {
    navigate('/events-media#meeting-notes')
  }

  const handleCardClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  // Convert events data to CardData format
  const eventCards: CardData[] = eventsData.slice(0, 3).map(event => ({
    id: event.id,
    title: event.title,
    description: event.description,
    datetime: event.datetime,
    location: event.location
  }))

  // Convert photo/video data to CardData format
  const photoCards: CardData[] = photoVideoData.slice(0, 3).map(card => ({
    id: card.id,
    title: card.title,
    date: card.date,
    url: card.url,
    type: card.type as 'video' | 'photo'
  }))

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        {/* Hero Section with Important Message */}
        <section className="hero-section">
          <div className="hero-image">
            <div className="important-message">
              <div className="message-icon">{siteConfig.heroMessage.icon}</div>
              <h3>{siteConfig.heroMessage.title}</h3>
              {siteConfig.heroMessage.lines.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Announcements Section */}
        <section id="announcements" className="announcements-section section-white">
          <div className="container">
            <div className="section-header">
              <div className="megaphone-icon">{siteConfig.announcement.icon}</div>
              <h2>ANNOUNCEMENTS</h2>
            </div>
            <div className="announcement-content">
              <p>{siteConfig.announcement.content}</p>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section id="events" className="events-section section-grey">
          <div className="container">
            <div className="section-header">
              <h2>UPCOMING EVENTS</h2>
            </div>
            <div className="important-event-notice">
              <div className="notice-icon">{siteConfig.meetingNotice.icon}</div>
              <p>{siteConfig.meetingNotice.content}</p>
            </div>
            <div className="events-grid">
              {eventCards.map((card) => (
                <Card
                  key={card.id}
                  data={card}
                  variant="event"
                />
              ))}
            </div>
            <div className="section-button">
              <button className="btn btn-primary" onClick={handleViewMoreEvents}>
                VIEW MORE UPCOMING EVENTS
              </button>
            </div>
          </div>
        </section>

        {/* Recent Photos Section */}
        <section id="photos" className="photos-section section-white">
          <div className="container">
            <div className="section-header">
              <h2>RECENT PHOTOS</h2>
            </div>
            <div className="photos-grid">
              {photoCards.map((card) => (
                <Card
                  key={card.id}
                  data={card}
                  variant="photo-video"
                  onClick={() => handleCardClick(card.url!)}
                />
              ))}
            </div>
            <div className="section-button">
              <button className="btn btn-primary" onClick={handleViewMorePhotos}>
                SEE MORE PHOTOS
              </button>
            </div>
          </div>
        </section>

        {/* Recent Meeting Notes Section */}
        <section id="meeting-notes" className="meeting-notes-section section-grey">
          <div className="container">
            <div className="section-header">
              <h2>RECENT MEETING NOTES</h2>
            </div>
            <PDFPreview
              title={siteConfig.defaultMeetingNotes.title}
              pdfUrl={siteConfig.defaultMeetingNotes.pdfUrl}
              downloadButtonText="VIEW MORE MEETING NOTES"
              showFallback={true}
              showDownloadButton={false}
            />
            <div className="section-button">
              <button className="btn btn-primary" onClick={handleViewMoreMeetingNotes}>VIEW MORE MEETING NOTES</button>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="contact-section section-white">
          <div className="container">
            <div className="section-header">
              <h2>CONTACT US</h2>
            </div>
            <div className="contact-grid">
              {siteConfig.contactInfo.map((contact, index) => (
                <div key={index} className="contact-card">
                  <div className="contact-icon">👤</div>
                  <h4>{contact.role}</h4>
                  <p><strong>{contact.name}</strong></p>
                  <p>Phone: {contact.phone}</p>
                  <p>Email: {contact.email}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {/* <ContentManager /> */}
    </div>
  )
}

export default HomePage
