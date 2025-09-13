import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Header.css'
import './Footer.css'

const HomePage: React.FC = () => {

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
              <p>Our next ALM meeting is at 6 pm on Thursday, February 8 at Tom & Kathy Stewart's, 19346 34th Ave S.</p>
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
              <div className="event-card">
                <div className="event-header">
                  <div className="event-datetime">First Tuesday of August @ 6 am</div>
                  <div className="event-location">ALM Community Beach Lot</div>
                </div>
                <h3>ALM Polar Plunge & Brunch</h3>
                <p>Be sure to bring a donation for the food bank and you will be in the DSHS. We always have great prizes. The Plunge will take place at noon.</p>
              </div>
              <div className="event-card">
                <div className="event-header">
                  <div className="event-datetime">July 4 @ 10 am</div>
                  <div className="event-location">ALM Community Beach Lot</div>
                </div>
                <h3>ALM Independence Day Parade</h3>
                <p>Meet at the corner of 33rd Ave S and S 192nd St at 9:30 am. The parade will start at 10 am. Join us at the end at the beach lot for ice cream and singing.</p>
              </div>
              <div className="event-card">
                <div className="event-header">
                  <div className="event-datetime">August 6 @ 6 pm</div>
                  <div className="event-location">ALM Community Beach Lot</div>
                </div>
                <h3>National Night Out Against Crime Parade and Potluck</h3>
                <p>Burgers and drinks. Please bring a side dish or dessert to share. This is a great way for us to connect with our neighbors and visit with local representatives, city council members and law enforcement.</p>
              </div>
            </div>
            <div className="section-button">
              <button className="btn btn-primary">VIEW MORE UPCOMING EVENTS</button>
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
              <div className="photo-card">
                <div className="photo-placeholder">
                  <div className="photo-icon">📸</div>
                  <p>View Gallery</p>
                </div>
                <h4>2025 ALSC Tasty Tapas</h4>
                <p>Aug 8-11, 2025</p>
              </div>
              <div className="photo-card">
                <div className="photo-placeholder">
                  <div className="photo-icon">🏃‍♂️</div>
                  <p>View Gallery</p>
                </div>
                <h4>ALSC 4th Of July Fun Run</h4>
                <p>Jul 4-8, 2025</p>
              </div>
              <div className="photo-card">
                <div className="photo-placeholder">
                  <div className="photo-icon">🎆</div>
                  <p>View Gallery</p>
                </div>
                <h4>2024 ALM 4th of July Parade</h4>
                <p>Jul 4-5, 2024</p>
              </div>
            </div>
            <div className="section-button">
              <button className="btn btn-primary">SEE MORE PHOTOS</button>
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
                <div className="pdf-controls">
                  <a 
                    href="https://anglelakemanor.com/Minutes/ALMAug2025.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="pdf-link"
                  >
                    📄 Open Full PDF
                  </a>
                  <a 
                    href="https://anglelakemanor.com/Minutes/ALMAug2025.pdf" 
                    download="ALMAug2025.pdf"
                    className="pdf-download"
                  >
                    ⬇️ Download
                  </a>
                </div>
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
