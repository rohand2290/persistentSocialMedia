import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
class Login extends React.Component {
  state = {};

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/getLogin", {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
      })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("username", response.data.username);
        this.setState({ redirect: "/dashboard" });
      });
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div>
        <h1>Login</h1>
        <form className="loginform" onSubmit={this.handleSubmit}>
          <input id="username" placeholder="Username"></input>
          <input id="password" placeholder="Password"></input>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
