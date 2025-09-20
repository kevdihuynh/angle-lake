import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import PDFPreview, { PDFOption } from './PDFPreview'
// import ContentManager from '../config/ContentManager'
import { siteConfig } from '../config/siteConfig'
import './Header.css'
import './Footer.css'
import './PDFPreview.css'

const AboutPage: React.FC = () => {
  const [selectedCovenant, setSelectedCovenant] = useState('snively-tracts')

  // Use configuration data
  const covenantOptions: PDFOption[] = siteConfig.aboutPage.covenants
  const clubOfficers = siteConfig.aboutPage.clubOfficers
  const beachRules = siteConfig.aboutPage.beachRules

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        {/* Club Officers Section */}
        <section id="officers" className="club-officers-section section-white">
          <div className="container">
            <div className="section-header">
              <h2>CLUB OFFICERS</h2>
            </div>
            <div className="officers-grid">
              {clubOfficers.map((officer, index) => (
                <div key={index} className="officer-card">
                  <div className="officer-icon">👤</div>
                  <h4>{officer.title}</h4>
                  <p className="officer-name">{officer.name}</p>
                  <p className="officer-contact">{officer.phone}</p>
                  <p className="officer-contact">{officer.email}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Documents Section */}
        <section id="legal" className="legal-section section-grey">
          <div className="container">
            <div className="section-header">
              <h2>LEGAL (COVENANTS, BYLAWS, ETC.)</h2>
            </div>
            
            <div className="legal-content">
              <div className="legal-subsection">
                <h3>COVENANTS</h3>
                
                <PDFPreview
                  title="ALM Covenants"
                  selectedValue={selectedCovenant}
                  options={covenantOptions}
                  onSelectionChange={setSelectedCovenant}
                  downloadButtonText="DOWNLOAD COVENANTS"
                  showSelector={true}
                  showDownloadButton={true}
                />
              </div>

              <div className="legal-subsection">
                <h3>BYLAWS</h3>
                
                <PDFPreview
                  title={siteConfig.aboutPage.bylaws.title}
                  pdfUrl={siteConfig.aboutPage.bylaws.pdfUrl}
                  downloadButtonText="DOWNLOAD BYLAWS"
                  showSelector={false}
                  showDownloadButton={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Beach Lot Rules Section */}
        <section id="beach-rules" className="beach-rules-section section-white">
          <div className="container">
            <div className="section-header">
              <h2>BEACH LOT RULES</h2>
            </div>
            
            <div className="rules-content">
              <div className="rules-subsection">
                <h3>Private Beach Rules - Posted</h3>
                <ul className="rules-list">
                  {beachRules.postedRules.map((rule, index) => (
                    <li key={index}>{rule}</li>
                  ))}
                </ul>
              </div>

              <div className="rules-subsection">
                <h3>Private Beach Rules - Addendum</h3>
                <ol className="rules-numbered-list">
                  {beachRules.addendumRules.map((rule, index) => (
                    <li key={index}>{rule}</li>
                  ))}
                </ol>
              </div>

              <div className="rules-subsection">
                <h3>Definitions:</h3>
                <div className="definitions">
                  {beachRules.definitions.map((def, index) => (
                    <p key={index}><strong>{def.term}:</strong> {def.definition}</p>
                  ))}
                </div>
              </div>

              <div className="rules-subsection">
                <h3>Foundation for Community Beach Lot rules:</h3>
                <div className="foundation-text">
                  {beachRules.foundation.map((text, index) => (
                    <p key={index}>{text}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {/* <ContentManager /> */}
    </div>
  )
}

export default AboutPage

