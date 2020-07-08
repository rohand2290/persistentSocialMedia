import React from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
class Post extends React.Component {
  state = {};
  componentDidMount() {
    axios
      .get(`/api/getPostbyId/${this.props.match.params.id}`)
      .then((response) => {
        if (localStorage.getItem("id") === null) {
          this.setState({
            title: response.data.title,
            author: response.data.author,
            content: response.data.content,
            replies: response.data.replies.map((reply) => (
              <p>{`${reply.author}- ${reply.content}`}</p>
            )),
            form: <h3>Login to reply</h3>,
          });
        } else {
          this.setState({
            title: response.data.title,
            author: response.data.author,
            content: response.data.content,
            replies: response.data.replies.map((reply) => (
              <p>{`${reply.author}- ${reply.content}`}</p>
            )),
            form: (
              <div>
                <form onSubmit={this.handleSubmit}>
                  <Form.Group>
                    <Form.Label>Reply</Form.Label>
                    <Form.Control type="text" id="replyContent" />
                  </Form.Group>
                  <Button type="submit" variant="primary">
                    Reply
                  </Button>
                </form>
              </div>
            ),
          });
        }
      });
  }

  handleSubmit = () => {
    axios
      .post(`/api/replyByPostId/${this.props.match.params.id}`, {
        author: localStorage.getItem("username"),
        content: document.getElementById("replyContent").value,
      })
      .then((response) => {
        window.location.reload(false);
      });
  };
  render() {
    return (
      <div>
        <Container>
          <h1>{this.state.title}</h1>
          <h3>{`Posted by user ${this.state.author}`}</h3>
          <p>{this.state.content}</p>
          <h3>Replies</h3>
          {this.state.replies}
          {this.state.form}
        </Container>
      </div>
    );
  }
}

export default Post;
