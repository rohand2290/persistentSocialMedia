import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
class NewPost extends React.Component {
  state = {};
  handleSubmit = () => {
    axios
      .post("/api/makeNewPost", {
        title: document.getElementById("postTitle").value,
        content: document.getElementById("postContent").value,
        replies: [],
        author: localStorage.getItem("username"),
      })
      .then((response) => this.setState({ redirect: "/" }));
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div>
        <Container>
          <h1>Create a new post</h1>
          <form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                id="postTitle"
                placeholder="Enter title"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Content</Form.Label>
              <Form.Control
                type="text"
                id="postContent"
                placeholder="Enter content"
              ></Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Create New Post
            </Button>
          </form>
        </Container>
      </div>
    );
  }
}

export default NewPost;
