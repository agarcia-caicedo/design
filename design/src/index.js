import React from "react";
import ReactDOM from "react-dom";
import { Route, Redirect, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import About from "./pages/About/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import * as serviceWorker from "./serviceWorker";

const routing = (
  <Router>
    <div>
      <Route exact path="/design" component={App} />
      <Route exact path="/">
        <Redirect to="/design" />
      </Route>
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Work" component={Work} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
