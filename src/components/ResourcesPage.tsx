import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import './Header.css'
import './Footer.css'

const ResourcesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [showAllAds, setShowAllAds] = useState(false)

  // Member ads data from Figma design
  const memberAds = [
    {
      id: '1',
      website: 'sing.com',
      phone: '888-888-8888',
      title: 'Singing Lessons with Bob',
      description: 'Designed for all ages, our singing lessons bring out your strengths & build your vocal confidence.'
    },
    {
      id: '2',
      website: 'swim.com',
      phone: '888-888-8888',
      title: 'Swimming Lessons with Sam',
      description: 'We offer group and private swim lessons with eight stages of development so you can find a class that\'s just right for you.'
    },
    {
      id: '3',
      website: 'landscape.com',
      phone: '888-888-8888',
      title: 'Lee\'s Landscaping',
      description: 'Lee\'s General Landscaping is an award winning full-service landscaping and yard clean up company. We have been in operation for over 30 years.'
    }
  ]

  // Filter ads based on search query
  const filteredAds = memberAds.filter(ad => 
    ad.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ad.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Get ads to display (first 3 or all based on showAllAds)
  const displayedAds = showAllAds ? filteredAds : filteredAds.slice(0, 3)

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        {/* ALM Member Ads Section */}
        <section id="member-ads" className="member-ads-section">
          <div className="container">
            <div className="section-header">
              <h2>ALM MEMBER ADS</h2>
            </div>
            <div className="search-bar">
              <div className="search-icon">🔍</div>
              <input 
                type="text" 
                placeholder="Search for member ads..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="ads-grid">
              {displayedAds.map((ad) => (
                <div key={ad.id} className="ad-card">
                  <div className="ad-header">
                    <div className="ad-website">Website: {ad.website}</div>
                    <div className="ad-phone">Call: {ad.phone}</div>
                  </div>
                  <h3>{ad.title}</h3>
                  <p>{ad.description}</p>
                </div>
              ))}
            </div>
            {filteredAds.length > 3 && (
              <div className="section-button">
                <button 
                  className="btn btn-primary"
                  onClick={() => setShowAllAds(!showAllAds)}
                >
                  {showAllAds ? 'SHOW LESS MEMBER ADS' : 'SHOW MORE MEMBER ADS'}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Angle Lake Information & Water Data Section */}
        <section id="water-data" className="water-data-section">
          <div className="container">
            <div className="section-header">
              <h2>ANGLE LAKE INFORMATION & WATER DATA</h2>
            </div>
            <div className="subsection">
              <h3>HYPERLINKS</h3>
              <ul className="links-list">
                <li><a href="https://anglelakemanor.com/water-data/current-statistics" target="_blank" rel="noopener noreferrer">Angle Lake Current Water Statistics</a></li>
                <li><a href="https://anglelakemanor.com/water-data/2020-water-quality-report" target="_blank" rel="noopener noreferrer">2020 Angle Lake Water Quality Report</a></li>
                <li><a href="https://anglelakemanor.com/water-data/2016-water-level-report" target="_blank" rel="noopener noreferrer">2016 Angle Lake Water Level Report</a></li>
                <li><a href="https://anglelakemanor.com/water-data/2012-water-quality-report" target="_blank" rel="noopener noreferrer">2012 Angle Lake Water Quality Report</a></li>
                <li><a href="https://anglelakemanor.com/water-data/multiyear-comparison-2009" target="_blank" rel="noopener noreferrer">Angle Lake Level - Multiyear Comparison on August 31, 2009</a></li>
                <li><a href="https://anglelakemanor.com/water-data/water-level-comparison" target="_blank" rel="noopener noreferrer">Water Level Comparison</a></li>
                <li><a href="https://anglelakemanor.com/water-data/hydrogeologic-cross-section" target="_blank" rel="noopener noreferrer">Hydrogeologic Cross Section F-F'</a></li>
                <li><a href="https://anglelakemanor.com/water-data/potentiometric-surface" target="_blank" rel="noopener noreferrer">Potentiometric Surface of Aquifer Qua</a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Fishing Guidelines Section */}
        <section id="fishing-guidelines" className="fishing-guidelines-section">
          <div className="container">
            <div className="section-header">
              <h2>FISHING GUIDELINES</h2>
            </div>
            <div className="subsection">
              <h3>HYPERLINKS</h3>
              <ul className="links-list">
                <li><a href="https://wdfw.wa.gov/" target="_blank" rel="noopener noreferrer">Washington Department of Fish & Wildlife</a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ALM vs ALSC Section */}
        <section id="alm-vs-alsc" className="alm-vs-alsc-section">
          <div className="container">
            <div className="section-header">
              <h2>ANGLE LAKE MANOR (ALM) VS ANGLE LAKE SHORE CLUB (ALSC)</h2>
            </div>
            
            <div className="comparison-content">
              <div className="comparison-item">
                <h3>What is Angle Lake Manor?</h3>
                <p>Angle Lake Manor is a Homeowners Association representing 88 homes located on the west side of Angle Lake. We meet bi-monthly on the 2nd Thursday of Feb, Apr, June, Aug, Oct & Dec. Our major events include:</p>
                <ul>
                  <li>4th of July Parade & Ice Cream Social</li>
                  <li>National Night Out Against Crime</li>
                  <li>Holiday Party</li>
                  <li>White Elephant Gift Exchange</li>
                </ul>
                <p>We handle annual maintenance, collect dues, and communicate through email, WhatsApp, and Facebook Group. Stay informed about community events and important updates through our various communication channels.</p>
                <p><strong>Contact:</strong> For more information about ALM, please contact our board members.</p>
              </div>
              
              <div className="comparison-item">
                <h3>What is Angle Lake Shore Club?</h3>
                <p>Angle Lake Shore Club is a social organization for residents and non-residents. New members receive information through our blog, newsletters, and Facebook Community pages. Contact Jean for more information. Dues are $20 per household.</p>
                <p>Our planned activities for the year include:</p>
                <ol>
                  <li>Polar Bear Plunge</li>
                  <li>Fishing Derby</li>
                  <li>Swim and Boat Races</li>
                  <li>Clean Sweep & Lunch</li>
                  <li>Tasty Tacos</li>
                  <li>Holiday Lights Boat Cruise</li>
                  <li>Holiday Party</li>
                  <li>Members Only Holiday Party</li>
                </ol>
                <p><em>Note: Quoted costs may change.</em></p>
              </div>
            </div>
            
            <div className="section-button">
              <a 
                href="https://angleshoreclub.blogspot.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                VISIT ALSC BLOGSPOT
              </a>
            </div>
          </div>
        </section>

        {/* City of SeaTac Section */}
        <section id="city-seatac" className="city-section">
          <div className="container">
            <div className="section-header">
              <h2>CITY OF SEATAC</h2>
            </div>
            <div className="city-content">
              <h3>Welcome!</h3>
              <p>The City of SeaTac was incorporated in February 1990. Located in the Pacific Northwest, SeaTac is a vibrant community with a population of 30,000. We are proud to be home to the Seattle-Tacoma International Airport, serving as a gateway to the Pacific Northwest.</p>
            </div>
            <div className="section-button">
              <a 
                href="https://www.seatacwa.gov/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default ResourcesPage;

