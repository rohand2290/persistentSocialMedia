import React from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
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
        <br />
        <Container>
          <h1>Register</h1>
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
              Register
            </Button>
          </form>
        </Container>
      </div>
    );
  }
}

export default Register;
