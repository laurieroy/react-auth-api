import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const baseurl = "http://localhost:3001";
    const { email, password } = this.state;

    axios
      .post(
        `${baseurl}/sessions`,
        {
          user: {
            email,
            password,
          },
        },
        {
          withCredentials: true,
        }
      )
      .then((resp) => {
        if (resp.data.logged_in) {
          this.props.handleSuccessfulAuth(resp.data)
        }
        // console.log("resp-login", resp);
      })
      .catch((error) => {
        console.log("login error", error);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="me@example.com"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
