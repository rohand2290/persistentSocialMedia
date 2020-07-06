import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Post from "./Post";
import NewPost from "./NewPost";
class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/post/:id" exact component={Post} />
          <Route path="/newPost" component={NewPost} />
        </Switch>
      </HashRouter>
    );
  }
}
export default App;
