# Google Photos API Setup Guide

## Step 1: Google Cloud Console Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Photos Library API**:
   - Go to "APIs & Services" > "Library"
   - Search for "Photos Library API"
   - Click on it and press "Enable"

## Step 2: Create OAuth 2.0 Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth 2.0 Client IDs"
3. Choose "Web application"
4. Add authorized redirect URIs:
   - `http://localhost:5173/auth/callback` (for development)
   - `https://yourdomain.com/auth/callback` (for production)
5. Copy the Client ID and Client Secret

## Step 3: Environment Variables

Create a `.env` file in your project root with:

```env
REACT_APP_GOOGLE_CLIENT_ID=your_client_id_here
REACT_APP_GOOGLE_CLIENT_SECRET=your_client_secret_here
REACT_APP_GOOGLE_REDIRECT_URI=http://localhost:5173/auth/callback
```

## Step 4: Test the Integration

1. Start your development server: `npm run dev`
2. Visit the homepage
3. Click "Connect to Google Photos" in the photos section
4. Complete the OAuth flow
5. Your photo albums should now display with real thumbnails!

## Troubleshooting

- Make sure your Google Photos albums are set to "Anyone with the link can view"
- Check that the album titles match the search terms in the code
- Verify your redirect URI matches exactly in Google Cloud Console
- Check browser console for any error messages

## Security Notes

- Never commit your `.env` file to version control
- Use different credentials for development and production
- Consider using environment-specific redirect URIs
