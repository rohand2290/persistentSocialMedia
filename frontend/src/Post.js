import React from "react";
import axios from "axios";
class Post extends React.Component {
  state = {};
  componentDidMount() {
    axios
      .get(`/api/getPostbyId/${this.props.match.params.id}`)
      .then((response) =>
        this.setState({
          title: response.data.title,
          author: response.data.author,
          content: response.data.content,
          replies: response.data.replies.map((reply) => (
            <p>{`${reply.author}- ${reply.content}`}</p>
          )),
        })
      );
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
        <h1>{this.state.title}</h1>
        <h2>{`Posted by user ${this.state.author}`}</h2>
        <p>{this.state.content}</p>
        <h3>Replies</h3>
        {this.state.replies}
        <h3>Reply to post</h3>
        <form className="replyForm" onSubmit={this.handleSubmit}>
          <input placeholder="Enter a reply" id="replyContent" />
          <button type="submit">Reply</button>
        </form>
      </div>
    );
  }
}

export default Post;
