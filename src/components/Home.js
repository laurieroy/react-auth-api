import axios from "axios";
import React, { Component } from "react";
import Login from "./auth/Login";
import Registration from "./auth/Registration";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  }

  handleLogoutClick() {
    const baseurl = "http://localhost:3001";
    axios
      .delete(`${baseurl}/logout`, { withCredentials: true })
      .then((resp) => {
        this.props.handleLogout();
      })
      .catch((error) => {
        console.log("logout error: ", error);
      });
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h1>Status: {this.props.loggedInStatus}</h1>
        <button onClick={() => this.handleLogoutClick()}>Logout</button>
        <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
      </div>
    );
  }
}
