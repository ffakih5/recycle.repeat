import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Record from "./pages/Record";
import Results from "./pages/Results";
import Share from "./pages/Share";
import NavBar from "./components/NavBar";

//import { useAuth0 } from '@auth0/auth0-react';
function App() {
      return (
        <div>
          <Home />
        </div>
      );
  }

export default App;
