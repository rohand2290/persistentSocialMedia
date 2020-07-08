import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
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
        if (response.data !== "") {
          console.log(response.data);
          localStorage.setItem("id", response.data.id);
          localStorage.setItem("username", response.data.username);
          this.setState({ redirect: "/dashboard" });
        } else {
          window.location.reload();
        }
      });
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div>
        <br />
        <Container>
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" id="username" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                id="password"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </form>
        </Container>
      </div>
    );
  }
}

export default Login;
