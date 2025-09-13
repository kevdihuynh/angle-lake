// Google Photos API configuration
const PHOTOS_SCOPE = 'https://www.googleapis.com/auth/photoslibrary.readonly';
const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const REDIRECT_URI = process.env.REACT_APP_GOOGLE_REDIRECT_URI || 'http://localhost:5173/auth/callback';

// OAuth2 configuration
let accessToken: string | null = null;

export interface PhotoAlbum {
  id: string;
  title: string;
  coverPhotoBaseUrl: string;
  mediaItemsCount: string;
  productUrl: string;
}

export interface PhotoItem {
  id: string;
  baseUrl: string;
  mimeType: string;
  filename: string;
  productUrl: string;
}

class GooglePhotosService {
  // Get authorization URL for OAuth flow
  getAuthUrl(): string {
    const params = new URLSearchParams({
      client_id: CLIENT_ID || '',
      redirect_uri: REDIRECT_URI,
      response_type: 'code',
      scope: PHOTOS_SCOPE,
      access_type: 'offline',
      prompt: 'consent'
    });
    
    return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
  }

  // Set access token
  setAccessToken(token: string) {
    accessToken = token;
  }

  // Get access token
  getAccessToken(): string | null {
    return accessToken;
  }

  // Exchange authorization code for access token
  async exchangeCodeForToken(code: string): Promise<string> {
    const response = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: CLIENT_ID || '',
        client_secret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET || '',
        code: code,
        grant_type: 'authorization_code',
        redirect_uri: REDIRECT_URI,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to exchange code for token');
    }

    const data = await response.json();
    this.setAccessToken(data.access_token);
    return data.access_token;
  }

  // Make authenticated request to Google Photos API
  private async makeRequest(endpoint: string, options: RequestInit = {}) {
    if (!accessToken) {
      throw new Error('No access token available. Please authenticate first.');
    }

    const response = await fetch(`https://photoslibrary.googleapis.com/v1${endpoint}`, {
      ...options,
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  // Get all albums
  async getAlbums(): Promise<PhotoAlbum[]> {
    try {
      const response = await this.makeRequest('/albums');
      return response.albums || [];
    } catch (error) {
      console.error('Error fetching albums:', error);
      throw error;
    }
  }

  // Get photos from a specific album
  async getAlbumPhotos(albumId: string): Promise<PhotoItem[]> {
    try {
      const response = await this.makeRequest('/mediaItems:search', {
        method: 'POST',
        body: JSON.stringify({
          albumId: albumId,
          pageSize: 25
        }),
      });
      return response.mediaItems || [];
    } catch (error) {
      console.error('Error fetching album photos:', error);
      throw error;
    }
  }

  // Get specific album by title (for our known albums)
  async getAlbumByTitle(title: string): Promise<PhotoAlbum | null> {
    const albums = await this.getAlbums();
    return albums.find(album => album.title.includes(title)) || null;
  }

  // Get thumbnail URL for a photo
  getThumbnailUrl(baseUrl: string, size: 'small' | 'medium' | 'large' = 'medium'): string {
    const sizeMap = {
      small: 'w200-h200',
      medium: 'w400-h400',
      large: 'w800-h800'
    };
    return `${baseUrl}=${sizeMap[size]}`;
  }
}

export default new GooglePhotosService();
