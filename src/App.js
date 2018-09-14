import React, { Component } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import Americanas from "./pages/Americanas";
import Atlas from "./pages/Atlas";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
      <Router>
        <Switch>
          <Route exact path="/" component={Americanas} />
          <Route path="/atlas" component={Atlas} />
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
