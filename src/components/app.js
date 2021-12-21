import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/dashboard"} component={Dashboard} />
        </Switch>
          <h1>DevCamp React Starter</h1>
          <h2>React Redux Router</h2>
        </BrowserRouter>
      </div>
    );
  }
}
