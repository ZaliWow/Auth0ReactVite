import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "./index.css"

import { Auth0Provider } from '@auth0/auth0-react';
import { DictionaryContextProvider } from './context/Dictionary.jsx'



const domain = import.meta.env.VITE_AUTH0_DOMAIN
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <DictionaryContextProvider>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
 
      <App />
    </Auth0Provider>
    </DictionaryContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
