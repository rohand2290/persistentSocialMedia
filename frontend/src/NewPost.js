import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

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
        <h1>Create a new post</h1>
        <form onSubmit={this.handleSubmit} className="newPostForm">
          <input placeholder="Enter title of post" id="postTitle" />
          <input placeholder="Enter content" id="postContent" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default NewPost;
