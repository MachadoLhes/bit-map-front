import React, {Component} from "react";
import { Graph } from "react-d3-graph";
import {getNodes, onClickNode, onMouseOverNode, myConfig, data, onClickLink, onMouseOverLink, onMouseOutLink, onMouseOutNode} from "../utils"

class GraphContainer extends Component {
  state = {
    shouldDisplayInfoBox: false,
    selectedNode: []
  }

  onClickNode(nodeNumber) {
      this.setState({shouldDisplayInfoBox: true})
  }

  componentDidMount() {
    getNodes().then(res => {
      console.log(res);
        this.setState({graph: res})
    })
  }

  render() {
    return (
      <div className="graph-container">
        <Graph id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
          data={this.state.graph}
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
};

export default GraphContainer;
