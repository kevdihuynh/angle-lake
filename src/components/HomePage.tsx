import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { eventsData } from '../data/eventsData'
import { photoVideoData } from '../data/photoVideoData'
import './Header.css'
import './Footer.css'

const HomePage: React.FC = () => {
  const navigate = useNavigate()


  const handleViewMoreEvents = () => {
    navigate('/events-media#events')
  }

  const handleViewMorePhotos = () => {
    navigate('/events-media#photos-videos')
  }

  const handleCardClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

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
        <section id="announcements" className="announcements-section">
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
        <section id="events" className="events-section">
          <div className="container">
            <div className="section-header">
              <h2>UPCOMING EVENTS</h2>
            </div>
            <div className="important-event-notice">
              <div className="notice-icon">!</div>
              <p>Our next ALM meeting is at 6 pm on Thursday, February 8 at Tom & Kathy Stewart's, 19346 34th Ave S.</p>
            </div>
            <div className="events-grid">
              {eventsData.slice(0, 3).map((event) => (
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
            <div className="section-button">
              <button className="btn btn-primary" onClick={handleViewMoreEvents}>
                VIEW MORE UPCOMING EVENTS
              </button>
            </div>
          </div>
        </section>

        {/* Recent Photos Section */}
        <section id="photos" className="photos-section">
          <div className="container">
            <div className="section-header">
              <h2>RECENT PHOTOS</h2>
            </div>
            <div className="photos-grid">
              {photoVideoData.slice(0, 3).map((card) => (
                <div 
                  key={card.id} 
                  className="photo-card"
                  onClick={() => handleCardClick(card.url)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="photo-placeholder">
                    <img 
                      src={card.type === 'video' 
                        ? `https://png.pngtree.com/png-vector/20250220/ourlarge/pngtree-video-recorder-flat-icon-vector-png-image_15531695.png`
                        : `https://tse2.mm.bing.net/th/id/OIP.ZL3bhWilBtwGsVTmiszcJgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3`
                      } 
                      alt={card.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    {card.type === 'video' && (
                      <div className="video-indicator">
                        <span>▶</span>
                      </div>
                    )}
                  </div>
                  <h4>{card.title}</h4>
                  <p>{card.date}</p>
                </div>
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
        <section id="meeting-notes" className="meeting-notes-section">
          <div className="container">
            <div className="section-header">
              <h2>RECENT MEETING NOTES</h2>
            </div>
            <div className="pdf-viewer">
              <div className="pdf-header">
                <h4>ALM Meeting Minutes - August 2025</h4>
              </div>
              <div className="pdf-embed-container">
                <iframe
                  src="https://anglelakemanor.com/Minutes/ALMAug2025.pdf#toolbar=1&navpanes=1&scrollbar=1"
                  width="100%"
                  height="600px"
                  title="ALM Meeting Minutes August 2025"
                  className="pdf-iframe"
                />
              </div>
              <div className="pdf-fallback">
                <p>If the PDF doesn't load, you can <a href="https://anglelakemanor.com/Minutes/ALMAug2025.pdf" target="_blank" rel="noopener noreferrer">view it directly here</a>.</p>
              </div>
            </div>
            <div className="section-button">
              <button className="btn btn-primary">VIEW MORE MEETING NOTES</button>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="contact-section">
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
