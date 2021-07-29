import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import App from "./App";

export default function Layout() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  );
}
