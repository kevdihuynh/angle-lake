import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Angle Lake Manor</h3>
            <p>
              Luxury lakeside living at its finest. Experience the perfect blend of 
              natural beauty and modern luxury.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="LinkedIn">💼</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Properties</h4>
            <ul>
              <li><a href="#properties">Lakeside Villas</a></li>
              <li><a href="#properties">Waterfront Estates</a></li>
              <li><a href="#properties">Executive Mansions</a></li>
              <li><a href="#properties">Modern Cottages</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Amenities</h4>
            <ul>
              <li><a href="#amenities">Private Marina</a></li>
              <li><a href="#amenities">Swimming Pool</a></li>
              <li><a href="#amenities">Fitness Center</a></li>
              <li><a href="#amenities">Clubhouse</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>📍 123 Lakeview Drive</li>
              <li>📞 (555) 123-4567</li>
              <li>✉️ info@anglelakemanor.com</li>
              <li>🕒 Mon-Fri 9AM-6PM</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Angle Lake Manor. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#accessibility">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
