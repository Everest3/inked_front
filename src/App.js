import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./assets/bootstrap.min.css";
import HomePage from "./pages/HomePage.js";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/login" component={Login}></Route>
      </Switch>
    </Router>
  );
}

export default App;
