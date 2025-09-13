import React from 'react'

const CTA: React.FC = () => {
  return (
    <section className="cta section">
      <div className="container">
        <h2>Ready to Make Angle Lake Manor Your Home?</h2>
        <p>
          Join our exclusive community and experience the ultimate in lakeside luxury living. 
          Schedule a private tour today and discover why Angle Lake Manor is the perfect place to call home.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-secondary btn-large">
            Schedule Private Tour
          </button>
          <button className="btn btn-outline btn-large">
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTA
