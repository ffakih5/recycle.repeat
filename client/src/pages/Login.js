import React from "react";
import NavBar from "../components/NavBar";

//import { useAuth0 } from '@auth0/auth0-react';
function Login(props) {
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
        <div> </div>
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




export default Login;


/*<div className="fb-login-button" data-width="" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false">
<fb:login-button 
  scope="public_profile,email"
  onlogin="checkLoginState();">
</fb:login-button>

</div>
*/


