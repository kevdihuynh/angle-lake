import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Card, { CardData } from './Card'
import PDFPreview from './PDFPreview'
import { eventsData } from '../data/eventsData'
import { photoVideoData } from '../data/photoVideoData'
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
              <div className="message-icon">!</div>
              <h3>Important Message</h3>
              <p>Our next ALM meeting is at 6 pm on</p>
              <p>Thursday, February 8 at Tom & Kathy</p>
              <p>Stewart's, 19246 34th Ave S.</p>
            </div>
          </div>
        </section>

        {/* Announcements Section */}
        <section id="announcements" className="announcements-section section-white">
          <div className="container">
            <div className="section-header">
              <div className="megaphone-icon">📢</div>
              <h2>ANNOUNCEMENTS</h2>
            </div>
            <div className="announcement-content">
              <p>Please pay your 2024 dues online and save my shoe leather going door to door. They are $50 this year which will help the maintenance and improvements at the beach lot. The most significant being a new dock. We need to raise $100k. Fundraising ideas are welcome as are generous donations (write DOCK in the notes). We are off to a good start with $790 already donated.</p>
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
              <div className="notice-icon">!</div>
              <p>Our next ALM meeting is at 6 pm on Thursday, February 8 at Tom & Kathy Stewart's, 19346 34th Ave S.</p>
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
              title="ALM Meeting Minutes - August 2025"
              pdfUrl="https://anglelakemanor.com/Minutes/ALMAug2025.pdf"
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
              <div className="contact-card">
                <div className="contact-icon">👤</div>
                <h4>President & Beach Lot Manager</h4>
                <p><strong>Ted Van Blaricom</strong></p>
                <p>Phone: (206) 555-0123</p>
                <p>Email: ted@anglelakemanor.com</p>
              </div>
              <div className="contact-card">
                <div className="contact-icon">👤</div>
                <h4>VP Of Administration</h4>
                <p><strong>Dean Martin</strong></p>
                <p>Phone: (206) 555-0124</p>
                <p>Email: dean@anglelakemanor.com</p>
              </div>
              <div className="contact-card">
                <div className="contact-icon">👤</div>
                <h4>VP Of Architectural Control Committee</h4>
                <p><strong>Eric Christenson</strong></p>
                <p>Phone: (206) 555-0125</p>
                <p>Email: eric@anglelakemanor.com</p>
              </div>
              <div className="contact-card">
                <div className="contact-icon">👤</div>
                <h4>Secretary</h4>
                <p><strong>Deb Anderson</strong></p>
                <p>Phone: (206) 555-0126</p>
                <p>Email: deb@anglelakemanor.com</p>
              </div>
              <div className="contact-card">
                <div className="contact-icon">👤</div>
                <h4>Treasurer</h4>
                <p><strong>Bob Simmons</strong></p>
                <p>Phone: (206) 555-0127</p>
                <p>Email: bob@anglelakemanor.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
