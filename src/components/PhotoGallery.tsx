import React, { useState, useEffect } from 'react';
import googlePhotosService, { PhotoAlbum } from '../services/googlePhotosService';

interface PhotoGalleryProps {
  albumTitles: string[];
  onAuthRequired?: () => void;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ albumTitles }) => {
  const [albums, setAlbums] = useState<PhotoAlbum[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = () => {
    const token = localStorage.getItem('google_photos_token');
    if (token) {
      googlePhotosService.setAccessToken(token);
      setIsAuthenticated(true);
      loadAlbums();
    } else {
      setLoading(false);
    }
  };

  const loadAlbums = async () => {
    try {
      setLoading(true);
      const allAlbums = await googlePhotosService.getAlbums();
      
      // Filter albums by the titles we're looking for
      const filteredAlbums = allAlbums.filter(album => 
        albumTitles.some(title => album.title.includes(title))
      );
      
      setAlbums(filteredAlbums);
    } catch (error) {
      console.error('Error loading albums:', error);
      setError('Failed to load photo albums. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleAuth = () => {
    const authUrl = googlePhotosService.getAuthUrl();
    window.location.href = authUrl;
  };

  const handleAlbumClick = (album: PhotoAlbum) => {
    window.open(album.productUrl, '_blank', 'noopener,noreferrer');
  };

  if (loading) {
    return (
      <div className="photos-grid">
        <div className="photo-card loading">
          <div className="photo-placeholder">
            <div className="loading-spinner">⏳</div>
            <p>Loading photos...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="photos-grid">
        <div className="photo-card auth-required">
          <div className="photo-placeholder">
            <div className="photo-icon">🔐</div>
            <p>Connect to Google Photos</p>
            <button 
              className="btn btn-primary" 
              onClick={handleAuth}
              style={{ marginTop: '10px' }}
            >
              Authenticate
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="photos-grid">
        <div className="photo-card error">
          <div className="photo-placeholder">
            <div className="photo-icon">❌</div>
            <p>{error}</p>
            <button 
              className="btn btn-primary" 
              onClick={loadAlbums}
              style={{ marginTop: '10px' }}
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (albums.length === 0) {
    return (
      <div className="photos-grid">
        <div className="photo-card no-albums">
          <div className="photo-placeholder">
            <div className="photo-icon">📷</div>
            <p>No matching albums found</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="photos-grid">
      {albums.map((album) => (
        <div 
          key={album.id} 
          className="photo-card"
          onClick={() => handleAlbumClick(album)}
        >
          <div className="photo-thumbnail">
            <img 
              src={googlePhotosService.getThumbnailUrl(album.coverPhotoBaseUrl, 'medium')}
              alt={album.title}
              onError={(e) => {
                // Fallback to emoji if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = '<div class="photo-icon">📸</div><p>View Gallery</p>';
                }
              }}
            />
          </div>
          <h4>{album.title}</h4>
          <p>{album.mediaItemsCount} photos</p>
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
