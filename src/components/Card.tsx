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
            ? 'https://png.pngtree.com/png-vector/20250220/ourlarge/pngtree-video-recorder-flat-icon-vector-png-image_15531695.png'
            : 'https://tse2.mm.bing.net/th/id/OIP.ZL3bhWilBtwGsVTmiszcJgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'
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
