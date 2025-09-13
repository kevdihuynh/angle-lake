import React from 'react'

const Features: React.FC = () => {
  const features = [
    {
      icon: '🏞️',
      title: 'Stunning Lake Views',
      description: 'Every property offers breathtaking panoramic views of Angle Lake with direct water access.'
    },
    {
      icon: '🏠',
      title: 'Luxury Homes',
      description: 'Custom-designed homes featuring premium finishes and modern architectural elements.'
    },
    {
      icon: '🏊',
      title: 'Resort Amenities',
      description: 'Enjoy a private marina, swimming pool, fitness center, and exclusive clubhouse.'
    },
    {
      icon: '🌳',
      title: 'Natural Beauty',
      description: 'Surrounded by pristine nature with walking trails and protected wildlife areas.'
    },
    {
      icon: '🔒',
      title: 'Gated Community',
      description: '24/7 security and privacy in an exclusive, gated waterfront community.'
    },
    {
      icon: '📍',
      title: 'Prime Location',
      description: 'Conveniently located near downtown with easy access to shopping and dining.'
    }
  ]

  return (
    <section className="features section" id="amenities">
      <div className="container">
        <div className="text-center">
          <h2>Why Choose Angle Lake Manor?</h2>
          <p>
            Experience the ultimate in lakeside luxury with our world-class amenities and 
            unparalleled natural beauty.
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
