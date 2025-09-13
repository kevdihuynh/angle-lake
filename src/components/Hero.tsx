import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Luxury Lakeside Living Awaits</h1>
        <p>
          Discover the perfect blend of natural beauty and modern luxury at Angle Lake Manor. 
          Experience waterfront living like never before with our premium properties and world-class amenities.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary btn-large">
            Explore Properties
          </button>
          <button className="btn btn-outline btn-large">
            Schedule Tour
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
