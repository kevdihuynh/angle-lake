import React from 'react'

const Properties: React.FC = () => {
  const properties = [
    {
      id: 1,
      price: '$2,450,000',
      title: 'Lakeside Villa',
      description: 'Stunning 4-bedroom villa with panoramic lake views, private dock, and modern luxury finishes.',
      bedrooms: 4,
      bathrooms: 3,
      sqft: '3,200',
      image: 'Lakeside Villa'
    },
    {
      id: 2,
      price: '$1,850,000',
      title: 'Waterfront Estate',
      description: 'Elegant 3-bedroom home featuring floor-to-ceiling windows and direct lake access.',
      bedrooms: 3,
      bathrooms: 2,
      sqft: '2,800',
      image: 'Waterfront Estate'
    },
    {
      id: 3,
      price: '$3,200,000',
      title: 'Executive Mansion',
      description: 'Luxurious 5-bedroom mansion with private beach, boat house, and premium amenities.',
      bedrooms: 5,
      bathrooms: 4,
      sqft: '4,500',
      image: 'Executive Mansion'
    },
    {
      id: 4,
      price: '$1,650,000',
      title: 'Modern Cottage',
      description: 'Charming 2-bedroom cottage with contemporary design and beautiful garden views.',
      bedrooms: 2,
      bathrooms: 2,
      sqft: '1,800',
      image: 'Modern Cottage'
    }
  ]

  return (
    <section className="properties section" id="properties">
      <div className="container">
        <div className="text-center">
          <h2>Featured Properties</h2>
          <p>
            Discover our collection of luxury waterfront homes, each offering unique 
            features and breathtaking lake views.
          </p>
        </div>
        
        <div className="properties-grid">
          {properties.map((property) => (
            <div key={property.id} className="property-card">
              <div className="property-image">
                {property.image}
              </div>
              <div className="property-content">
                <div className="property-price">{property.price}</div>
                <h3 className="property-title">{property.title}</h3>
                <p className="property-description">{property.description}</p>
                <div className="property-features">
                  <span className="property-feature">{property.bedrooms} Bedrooms</span>
                  <span className="property-feature">{property.bathrooms} Bathrooms</span>
                  <span className="property-feature">{property.sqft} sq ft</span>
                </div>
                <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Properties
