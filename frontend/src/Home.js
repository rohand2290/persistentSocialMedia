import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container } from "react-bootstrap";
class Home extends React.Component {
  state = {};

  componentDidMount() {
    axios.get("/api/getAllPosts").then((response) =>
      this.setState({
        posts: response.data.map((post) => (
          <div>
            <Link
              to={`/post/${post.id}`}
            >{`${post.title} (${post.replies.length} replies)`}</Link>
            <br />
          </div>
        )),
      })
    );
  }
  render() {
    return (
      <Container>
        <div>
          <h1>Posts</h1>
          <div id="posts">{this.state.posts}</div>
        </div>
      </Container>
    );
  }
}

export default Home;
