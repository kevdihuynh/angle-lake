import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Header.css'
import './Footer.css'

const ResourcesPage: React.FC = () => {
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
              <input type="text" placeholder="Search for member ads..." />
            </div>
            <div className="ads-grid">
              <div className="ad-card">
                <div className="ad-header">
                  <div className="ad-website">Website: example1.com</div>
                  <div className="ad-phone">Cell: 000-000-0000</div>
                </div>
                <h3>Singing Lessons with Bob</h3>
                <p>Designed for all ages, our singing lessons help you gain strength & build your vocal confidence.</p>
              </div>
              <div className="ad-card">
                <div className="ad-header">
                  <div className="ad-website">Website: example2.com</div>
                  <div className="ad-phone">Cell: 000-000-0000</div>
                </div>
                <h3>Swimming Lessons with Sam</h3>
                <p>We offer group and private swim lessons with eight stages of development. You'll be sure to find a class that's just right for you.</p>
              </div>
              <div className="ad-card">
                <div className="ad-header">
                  <div className="ad-website">Website: example3.com</div>
                  <div className="ad-phone">Cell: 000-000-0000</div>
                </div>
                <h3>Leo's Landscaping</h3>
                <p>Leo's General Landscaping is an award winning full-service landscaping and yard clean up company. We have been in operation for over 30 years.</p>
              </div>
            </div>
            <div className="section-button">
              <button className="btn btn-primary">SHOW MORE MEMBER ADS</button>
            </div>
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
                <li><a href="#">Angle Lake Current Water Statistics</a></li>
                <li><a href="#">2023 Angle Lake Water Quality Report</a></li>
                <li><a href="#">2022 Angle Lake Water Quality Report</a></li>
                <li><a href="#">2019 Angle Lake Water Quality Report</a></li>
                <li><a href="#">Angle Lake Level - Multiyear Comparison on August 31, 2009</a></li>
                <li><a href="#">Water Level Comparison</a></li>
                <li><a href="#">Hydrogeologic Cross Section F-F'</a></li>
                <li><a href="#">Potentiometric Surface of Aquifer Ops</a></li>
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
                <li><a href="#">Washington Department of Fish & Wildlife</a></li>
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
                <p>Angle Lake Manor is a Homeowners Association representing 88 homes located on the west side of Angle Lake. We meet bi-monthly on the 2nd Thursday of Feb, Apr, June, Aug, Oct & Dec. Our major events include the 4th of July Parade & Ice Cream Social, National Night Out Against Crime, Holiday Party, and White Elephant Gift Exchange.</p>
                <p>We handle annual maintenance, collect dues, and communicate through email, WhatsApp, and Facebook. Stay informed about community events and important updates through our various communication channels.</p>
              </div>
              
              <div className="comparison-item">
                <h3>What is Angle Lake Shore Club?</h3>
                <p>Angle Lake Shore Club is a social organization for residents and non-residents. New members receive information through our blog, newsletters, and Facebook Community pages. Contact Jean for more information. Dues are $20 per household.</p>
                <p>Our planned activities for the year include:</p>
                <ul>
                  <li>Polar Bear Plunge</li>
                  <li>Fishing Derby</li>
                  <li>Swim and Boat Races</li>
                  <li>Clean Sweep & Lunch</li>
                  <li>Tasty Tacos</li>
                  <li>Holiday Lights Boat Cruise</li>
                  <li>Holiday Party</li>
                  <li>Members Only Holiday Party</li>
                </ul>
                <p><em>Note: Quoted costs may change.</em></p>
              </div>
            </div>
            
            <div className="section-button">
              <button className="btn btn-primary">VISIT ALSC BLOGSPOT</button>
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
              <button className="btn btn-primary">LEARN MORE</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default ResourcesPage;

