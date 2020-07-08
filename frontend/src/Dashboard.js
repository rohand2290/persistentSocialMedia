import React from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";

class Dashboard extends React.Component {
  state = {};
  componentWillMount() {
    axios
      .get(`/api/getLoginbyId/${localStorage.getItem("id")}`)
      .then((response) => {
        console.log(response.data);
        if (response.data === "") {
          this.setState({ redirect: "/" });
        } else {
          this.setState({ name: response.data.username });
        }
      });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else {
      return (
        <div>
          <Container>
            <h1>{`Welcome, ${this.state.name}`}</h1>
            <Link to="/newPost">Make a new post</Link>
          </Container>
        </div>
      );
    }
  }
}

export default Dashboard;
