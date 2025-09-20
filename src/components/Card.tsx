import React from 'react'
import './Card.css'

export interface CardData {
  id: string
  title: string
  description?: string
  // Event card fields
  datetime?: string
  location?: string
  // Member ad fields
  website?: string
  phone?: string
  // Photo/video fields
  type?: 'video' | 'photo'
  date?: string
  url?: string
  imageUrl?: string
}

export interface CardProps {
  data: CardData
  variant?: 'event' | 'member-ad' | 'photo-video'
  onClick?: () => void
}

const Card: React.FC<CardProps> = ({ data, variant = 'event', onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick()
    } else if (data.url) {
      window.open(data.url, '_blank', 'noopener,noreferrer')
    }
  }

  const renderEventCard = () => (
    <div className="card event-card" onClick={handleClick}>
      <div className="card-header">
        {data.datetime && <div className="card-datetime">{data.datetime}</div>}
        {data.location && <div className="card-location">{data.location}</div>}
      </div>
      <h3 className="card-title">{data.title}</h3>
      {data.description && <p className="card-description">{data.description}</p>}
    </div>
  )

  const renderMemberAdCard = () => (
    <div className="card ad-card" onClick={handleClick}>
      <div className="card-header">
        {data.website && <div className="card-website">Website: {data.website}</div>}
        {data.phone && <div className="card-phone">Call: {data.phone}</div>}
      </div>
      <h3 className="card-title">{data.title}</h3>
      {data.description && <p className="card-description">{data.description}</p>}
    </div>
  )

  const renderPhotoVideoCard = () => (
    <div className="card photo-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="card-image-container">
        <img 
          src={data.imageUrl || (data.type === 'video' 
            ? 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDEzNTAwOTQ%3D/original/5b72040c-761c-462e-bd14-c3d39376bd1b.png?im_w=720'
            : 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/fe/ce/68/angle-lake-park.jpg?w=1200&h=-1&s=1'
          )} 
          alt={data.title}
          className="card-image"
        />
        {data.type === 'video' && (
          <div className="video-indicator">
            <span>▶</span>
          </div>
        )}
      </div>
      <h4 className="card-title">{data.title}</h4>
      {data.date && <p className="card-date">{data.date}</p>}
    </div>
  )

  switch (variant) {
    case 'member-ad':
      return renderMemberAdCard()
    case 'photo-video':
      return renderPhotoVideoCard()
    case 'event':
    default:
      return renderEventCard()
  }
}

export default Card
