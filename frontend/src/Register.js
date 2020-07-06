import React from "react";
import axios from "axios";

import { Redirect } from "react-router-dom";
class Register extends React.Component {
  state = {};

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/makeNewLogin", {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
      })
      .then((response) => {
        console.log(response.data);
        this.setState({ redirect: "/login" });
      });
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div>
        <h1>Register</h1>
        <form className="registerform" onSubmit={this.handleSubmit}>
          <input id="username" placeholder="Username"></input>
          <input id="password" placeholder="Password"></input>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
