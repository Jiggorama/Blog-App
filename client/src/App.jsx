import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./screens/Home/home";
import Posts from "./screens/Posts/Posts";
import PostDetails from "./screens/PostDetails/PostDetails";
import PostCreate from "./screens/PostCreate/PostCreate";
import PostEdit from "./screens/PostEdit/PostEdit";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/posts">
          <Posts />
        </Route>
        <Route exact path="/post-create">
          <PostCreate />
        </Route>
        <Route exact path="/posts/:id">
          <PostDetails />
        </Route>
        <Route exact path="/posts/:id/edit">
          <PostEdit />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
