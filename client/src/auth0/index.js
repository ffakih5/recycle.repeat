import { useState, useEffect, createContext, useContext } from "react";
import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const UserContext = createContext()

const [user, setUser] = useState({})
const [retry, setRetry] = useState(() => {})

return(
  <Auth0Provider
    domain="YOUR_AUTH0_DOMAIN"
    clientId="YOUR_AUTH0_CLIENT_ID"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
  //document.getElementById('app')
);

/*FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});
*/

const {
    isLoading, 
    isAuthenticated,
    error,
    loginWithRedirect,
    logout,
  } = useAuth0();

  return  {
    isLoading, 
    isAuthenticated,
    error,
    loginWithRedirect,
    logout,
  } 