import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Results from "./pages/Results";
import Share from "./pages/Share";


//import { useAuth0 } from '@auth0/auth0-react';
function App() {
      return (
        <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route exact path={["/", "/Home"]}>
              <Home/>
            </Route>
            <Route>
              <Login />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

export default App;
