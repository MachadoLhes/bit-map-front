import React, { Component } from 'react';
import './App.css';
import { Graph } from 'react-d3-graph';
import { Container, Row, Col } from 'reactstrap';
import Body from "./components/Body";
import SideBar from './components/SideBar';


class App extends Component {
  render() {
    return (
      <div className="App">

        <SideBar />
        <Body />

      </div>
    );
  }
}

export default App;
