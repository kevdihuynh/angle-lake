import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Card, { CardData } from './Card'
// import ContentManager from '../config/ContentManager'
import { siteConfig } from '../config/siteConfig'
import './Header.css'
import './Footer.css'
import './Card.css'

const ResourcesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [showAllAds, setShowAllAds] = useState(false)

  // Use configuration data
  const memberAds = siteConfig.resourcesPage.memberAds
  const waterDataLinks = siteConfig.resourcesPage.waterDataLinks
  const fishingLinks = siteConfig.resourcesPage.fishingLinks
  const almInfo = siteConfig.resourcesPage.almInfo
  const alscInfo = siteConfig.resourcesPage.alscInfo
  const cityInfo = siteConfig.resourcesPage.cityInfo

  // Filter ads based on search query
  const filteredAds = memberAds.filter(ad => 
    ad.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ad.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Get ads to display (first 3 or all based on showAllAds)
  const displayedAds = showAllAds ? filteredAds : filteredAds.slice(0, 3)

  // Convert member ads data to CardData format
  const memberAdCards: CardData[] = displayedAds.map(ad => ({
    id: ad.id,
    title: ad.title,
    description: ad.description,
    website: ad.website,
    phone: ad.phone
  }))

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        {/* ALM Member Ads Section */}
        <section id="member-ads" className="member-ads-section section-white">
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
              {memberAdCards.map((card) => (
                <Card
                  key={card.id}
                  data={card}
                  variant="member-ad"
                />
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
        <section id="water-data" className="water-data-section section-grey">
          <div className="container">
            <div className="section-header">
              <h2>ANGLE LAKE INFORMATION & WATER DATA</h2>
            </div>
            <div className="subsection">
              <h3>HYPERLINKS</h3>
              <ul className="links-list">
                {waterDataLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Fishing Guidelines Section */}
        <section id="fishing-guidelines" className="fishing-guidelines-section section-white">
          <div className="container">
            <div className="section-header">
              <h2>FISHING GUIDELINES</h2>
            </div>
            <div className="subsection">
              <h3>HYPERLINKS</h3>
              <ul className="links-list">
                {fishingLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ALM vs ALSC Section */}
        <section id="alm-vs-alsc" className="alm-vs-alsc-section section-grey">
          <div className="container">
            <div className="section-header">
              <h2>ANGLE LAKE MANOR (ALM) VS ANGLE LAKE SHORE CLUB (ALSC)</h2>
            </div>
            
            <div className="comparison-content">
              <div className="comparison-item">
                <h3>{almInfo.title}</h3>
                <p>{almInfo.description}</p>
                <ul>
                  {almInfo.events.map((event, index) => (
                    <li key={index}>{event}</li>
                  ))}
                </ul>
                <p>We handle annual maintenance, collect dues, and communicate through email, WhatsApp, and Facebook Group. Stay informed about community events and important updates through our various communication channels.</p>
                <p><strong>Contact:</strong> {almInfo.contact}</p>
              </div>
              
              <div className="comparison-item">
                <h3>{alscInfo.title}</h3>
                <p>{alscInfo.description}</p>
                <p>Our planned activities for the year include:</p>
                <ol>
                  {alscInfo.activities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                  ))}
                </ol>
                <p><em>{alscInfo.note}</em></p>
              </div>
            </div>
            
            <div className="section-button">
              <a 
                href={alscInfo.blogUrl}
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
        <section id="city-seatac" className="city-section section-white">
          <div className="container">
            <div className="section-header">
              <h2>CITY OF SEATAC</h2>
            </div>
            <div className="city-content">
              <h3>{cityInfo.title}</h3>
              <p>{cityInfo.description}</p>
            </div>
            <div className="section-button">
              <a 
                href={cityInfo.learnMoreUrl}
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
      {/* <ContentManager /> */}
    </div>
  )
}

export default ResourcesPage;

