import React, { Component } from 'react';
import './App.css';
import { Graph } from 'react-d3-graph';
import mock_nodes from './mock_nodes.json';
import mock_relations from './mock_relations.json';

const getNodes = function() {
  return mock_nodes.map(node => {
    return {'id': node.id, 'name': node.name}
  })
};

const getLinks = function() {
  return mock_relations.map(relation => {
    return {'source': relation.source, 'target': relation.target}
  })
};

const data = {
  nodes: getNodes(),
  links: getLinks()
};

// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
const myConfig = {
  nodeHighlightBehavior: true,
  node: {
      color: 'gray',
      size: 1000,
      highlightStrokeColor: 'blue',
      symbolType: 'square',
      fontSize: 16,
      labelProperty: 'name',
  },
  link: {
      highlightColor: 'lightblue'
  }
};

// graph event callbacks
const onClickNode = function(nodeId) {
  window.alert(`Clicked node ${nodeId}`);
};

const onMouseOverNode = function(nodeId) {
  
};

const onMouseOutNode = function(nodeId) {
 
};

const onClickLink = function(source, target) {
  window.alert(`Clicked link between ${source} and ${target}`);
};

const onMouseOverLink = function(source, target) {
  
};

const onMouseOutLink = function(source, target) {
  
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <Graph
          id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
          data={data}
          config={myConfig}
          onClickNode={onClickNode}
          onClickLink={onClickLink}
          onMouseOverNode={onMouseOverNode}
          onMouseOutNode={onMouseOutNode}
          onMouseOverLink={onMouseOverLink}
          onMouseOutLink={onMouseOutLink}
        />;
      </div>
    );
  }
}

export default App;
