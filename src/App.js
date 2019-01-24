import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home"
import Post from "./Post"

class App extends Component {
  render() {
    return (
      <div className="App">
         <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/post/:id" component={Post} />
            <Route component={Error} />
          </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
