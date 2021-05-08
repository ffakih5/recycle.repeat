import React from "react";
//import { useAuth0 } from '@auth0/auth0-react';
function App() {
    /*const {
      isLoading, 
      isAuthenticated,
      error,
      user,
      loginWithRedirect,
      logout,
    } = useAuth0();
    */
   const isLoading = false;
   const isAuthenticated = true; 
   const error = false;
   const user = {
     name: "foobar",
     email: "foobar@foo.com"
   };
   const logout = "logout"
   const loginWithRedirect = () => {
    return true;
   }
    if (isLoading) { 
      return <div>Loading...</div>;
    }
    if (error) {
      console.log(error);
      return <div>Oops... {error.message}</div>;
    }
   function loadResults () {
     console.log("loadResults");
   }
    if (isAuthenticated) {
      return (
        <div>
          Hello {user.name}{' '}
          <form>
            <input type = "text"></input>
            <button onClick={loadResults}>Load Results</button>
          </form>
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Log out
          </button>
        </div>
      );
    } else {
      return <button onClick={loginWithRedirect}>Log in</button>;
    }
  }

export default App;
