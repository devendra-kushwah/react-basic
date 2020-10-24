import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Dashboard, Login } from "../Pages";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  </Router>
);
export default Routes;
