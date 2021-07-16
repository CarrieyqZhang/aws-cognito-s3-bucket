import React, { Component } from "react";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Nav from "./components/Nav";
import Success from "./components/Success";
import Forgot from "./components/Forgot";

import UserPool from "./UserPool";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Nav} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/success" component={Success} />
      <Route exact path="/forgot" component={Forgot} />

      <div>
        <Nav />
      </div>
    </div>
  );
}

export default App;
