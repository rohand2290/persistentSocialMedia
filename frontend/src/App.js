import React from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Post from "./Post";
import NewPost from "./NewPost";
import { Navbar, Nav, Button } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  state = {};

  logout = () => {
    localStorage.clear();
    window.location.reload(false);
  };
  checkStatus = () => {
    axios
      .get(`/api/getLoginbyId/${localStorage.getItem("id")}`)
      .then((response) => {
        console.log(typeof response.data);
        if (
          response.data === null ||
          response.data === undefined ||
          response.data === ""
        ) {
          this.setState({
            navComponent: (
              <Nav>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </Nav>
            ),
          });
        } else {
          this.setState({
            navComponent: (
              <div>
                <Nav>
                  <Nav.Link
                    as={Link}
                    to="/dashboard"
                  >{`Logged in as ${response.data.username}`}</Nav.Link>
                  <Button variant="outline-success" onClick={this.logout}>
                    Logout
                  </Button>
                </Nav>
              </div>
            ),
          });
        }
      });
  };
  componentDidMount() {
    setInterval(this.checkStatus, 1000);
  }
  render() {
    return (
      <div>
        <HashRouter>
          <Navbar bg="light">
            <Navbar.Brand href="/">Ikobi</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              {this.state.navComponent}
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/post/:id" exact component={Post} />
            <Route path="/newPost" component={NewPost} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
export default App;
