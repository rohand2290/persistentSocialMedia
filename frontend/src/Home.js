import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class Home extends React.Component {
  state = {};

  componentDidMount() {
    axios.get("/api/getAllPosts").then((response) =>
      this.setState({
        posts: response.data.map((post) => (
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        )),
      })
    );
  }
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <br />
        <div id="posts">{this.state.posts}</div>
      </div>
    );
  }
}

export default Home;
