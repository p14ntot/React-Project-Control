
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
      domain="second-first-try.eu.auth0.com"
      clientId="lJ1dPA19eZw6RAydTcEAwF50xDk4K05D"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
  </Auth0Provider>,
);
