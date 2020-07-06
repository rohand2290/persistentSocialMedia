import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class Dashboard extends React.Component {
  state = {};
  componentWillMount() {
    axios
      .get(`/api/getLoginbyId/${localStorage.getItem("id")}`)
      .then((response) => {
        console.log(response.data);
        this.setState({ name: response.data.username });
      });
  }

  render() {
    return (
      <div>
        <h1>{`Welcome, ${this.state.name}`}</h1>
        <Link to="/newPost">Make a new post</Link>
      </div>
    );
  }
}

export default Dashboard;
