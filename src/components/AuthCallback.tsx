import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import googlePhotosService from '../services/googlePhotosService';

const AuthCallback: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const handleAuthCallback = async () => {
      const code = searchParams.get('code');
      const error = searchParams.get('error');

      if (error) {
        console.error('OAuth error:', error);
        navigate('/?error=auth_failed');
        return;
      }

      if (code) {
        try {
          // Exchange code for access token
          const accessToken = await googlePhotosService.exchangeCodeForToken(code);
          
          // Store token in localStorage
          localStorage.setItem('google_photos_token', accessToken);
          
          // Redirect back to home page
          navigate('/?auth=success');
        } catch (error) {
          console.error('Error exchanging code for token:', error);
          navigate('/?error=token_exchange_failed');
        }
      } else {
        navigate('/?error=no_code');
      }
    };

    handleAuthCallback();
  }, [searchParams, navigate]);

  return (
    <div className="auth-callback">
      <div className="container">
        <div className="loading-message">
          <div className="loading-spinner">⏳</div>
          <h3>Authenticating with Google Photos...</h3>
          <p>Please wait while we complete the authentication process.</p>
        </div>
      </div>
    </div>
  );
};

export default AuthCallback;
