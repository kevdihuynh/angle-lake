import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Header.css'
import './Footer.css'

const UnderConstruction: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <section className="construction-section">
          <div className="container">
            <div className="construction-content">
              <div className="construction-icon">🚧</div>
              <h1>Under Construction</h1>
              <p>This page is currently under construction.</p>
              <p>Please check back soon!</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default UnderConstruction

