import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import './Header.css'
import './Footer.css'

const EventsMediaPage: React.FC = () => {
  const [selectedNewsletter, setSelectedNewsletter] = useState('january-2024')
  const [selectedMeetingNotes, setSelectedMeetingNotes] = useState('january-2024')

  const newsletterOptions = [
    { value: 'january-2024', label: 'January, 2024' },
    { value: 'february-2021', label: 'February, 2021' },
    { value: 'december-2019', label: 'December, 2019' },
    { value: 'may-2017', label: 'May 2017' }
  ]

  const meetingNotesOptions = [
    { value: 'january-2024', label: 'January, 2024' },
    { value: 'february-2021', label: 'February, 2021' },
    { value: 'december-2019', label: 'December, 2019' },
    { value: 'may-2017', label: 'May 2017' }
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
              <input type="text" placeholder="Search for events..." />
            </div>

            {/* Event Cards */}
            <div className="events-grid">
              <div className="event-card">
                <div className="event-header">
                  <div className="event-datetime">First Tuesday of August @ 6 pm</div>
                  <div className="event-location">ALM Community Beach Lot</div>
                </div>
                <h3>ALM Polar Plunge & Brunch</h3>
                <p>Be sure to bring a donation for the food bank and you will get a raffle ticket. We always have great prizes. The Plunge will take place at Noon.</p>
              </div>
              
              <div className="event-card">
                <div className="event-header">
                  <div className="event-datetime">July 4 @ 10 am</div>
                  <div className="event-location">ALM Community Beach Lot</div>
                </div>
                <h3>ALM Independence Day Parade</h3>
                <p>Meet at the corner of 33rd Ave S and S 194th before 10 am to get decorated. Join us at the end at the beach lot for Ice cream and singing.</p>
              </div>
              
              <div className="event-card">
                <div className="event-header">
                  <div className="event-datetime">August 6 @ 6 pm</div>
                  <div className="event-location">ALM Community Beach Lot</div>
                </div>
                <h3>National Night Out Against Crime Picnic and Potluck</h3>
                <p>Burgers and drinks. Please bring a side dish and/or dessert to share. This is a great way for us to connect with our neighbors and visit with local representatives, city council members and law enforcement.</p>
              </div>
            </div>
            
            <div className="section-button">
              <button className="btn btn-primary">SHOW MORE EVENTS</button>
            </div>
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
              <input type="text" placeholder="Search for photos..." />
            </div>

            {/* Photo/Video Cards */}
            <div className="albums-grid">
              <div className="album-card">
                <div className="album-thumbnail">
                  <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'><rect fill='%23E3F2FD' width='300' height='200'/><circle cx='100' cy='80' r='30' fill='%232196F3'/><circle cx='200' cy='120' r='25' fill='%23FF9800'/><rect x='50' y='150' width='200' height='20' fill='%23E0E0E0'/><rect x='60' y='160' width='180' height='15' fill='%23BDBDBD'/></svg>" alt="2024 ALM ALSC Polar Plunge" />
                </div>
                <div className="album-info">
                  <h4>2024 ALM ALSC Polar Plunge</h4>
                  <p>Jan 1st 2024</p>
                </div>
              </div>

              <div className="album-card">
                <div className="album-thumbnail">
                  <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'><rect fill='%23FFF3E0' width='300' height='200'/><rect x='50' y='50' width='200' height='100' fill='%23FF9800'/><circle cx='100' cy='100' r='20' fill='%23FFC107'/><circle cx='200' cy='100' r='20' fill='%23FFC107'/><rect x='80' y='120' width='140' height='20' fill='%23E65100'/></svg>" alt="2023 ALM Cup O' Cheer" />
                </div>
                <div className="album-info">
                  <h4>2023 ALM Cup O' Cheer</h4>
                  <p>December 2nd 2023</p>
                </div>
              </div>

              <div className="album-card">
                <div className="album-thumbnail">
                  <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'><rect fill='%231A1A1A' width='300' height='200'/><rect x='100' y='80' width='100' height='40' fill='%23FFD700'/><circle cx='120' cy='100' r='8' fill='%23FF6B6B'/><circle cx='180' cy='100' r='8' fill='%234ECDC4'/><rect x='90' y='140' width='120' height='20' fill='%23333'/><rect x='100' y='150' width='100' height='10' fill='%23666'/></svg>" alt="The Roadhouse - Oct 2023 Ribbon Cutting" />
                </div>
                <div className="album-info">
                  <h4>The Roadhouse - Oct 2023 Ribbon Cutting</h4>
                  <p>October 29th 2023</p>
                </div>
              </div>
            </div>
            
            <div className="section-button">
              <button className="btn btn-primary">SHOW MORE ALBUMS</button>
            </div>
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
                <div className="pdf-controls">
                  <span>1/2</span>
                  <span>100%</span>
                  <button>🔍+</button>
                  <button>🔍-</button>
                  <button>⛶</button>
                  <button>⬇️</button>
                  <button>🖨️</button>
                </div>
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
                <h4>ALM Meeting Minutes October 26, 2023</h4>
                <div className="pdf-controls">
                  <span>1/2</span>
                  <span>100%</span>
                  <button>🔍+</button>
                  <button>🔍-</button>
                  <button>⛶</button>
                  <button>⬇️</button>
                  <button>🖨️</button>
                </div>
              </div>
              <div className="pdf-embed-container">
                <iframe
                  src="https://anglelakemanor.com/Minutes/ALMAug2025.pdf#toolbar=1&navpanes=1&scrollbar=1"
                  width="100%"
                  height="600px"
                  title="ALM Meeting Notes"
                  className="pdf-iframe"
                />
              </div>
            </div>
            
            <div className="section-button">
              <button className="btn btn-primary">DOWNLOAD MEETING NOTES</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default EventsMediaPage
