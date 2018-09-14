import React, {Component} from "react";
import { Graph } from "react-d3-graph";
import {getNodes, onClickNode, onMouseOverNode, myConfig, data, onClickLink, onMouseOverLink, onMouseOutLink, onMouseOutNode} from "../utils"
import renderIf from 'render-if'

class GraphContainer extends Component {
  state = {
    shouldDisplayInfoBox: false,
    selectedNode: []
  }

  onClickNode(nodeNumber) {
      let node = this.state.graph.nodes
      node = node.find(x => x.id === nodeNumber)
      this.setState({shouldDisplayInfoBox: true, selectedNode: node})
      console.log(node)
  }

  componentDidMount() {
    getNodes().then(res => {
        this.setState({graph: res})
    })
  }

render(){
        return(
            <div>
            {renderIf(this.state.graph)(
                <div>
                <div style={{'max-width': '50vw'}}>
                    <Graph id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
                        data={this.state.graph}
                        config={myConfig}
                        onClickNode={this.onClickNode.bind(this)}
                        onClickLink={onClickLink}
                        onMouseOverNode={onMouseOverNode}
                        onMouseOutNode={onMouseOutNode}
                        onMouseOverLink={onMouseOverLink}
                        onMouseOutLink={onMouseOutLink}
                    />
                </div>
                {this.state.shouldDisplayInfoBox ? 
                (<div>
                         <div class="card">
                            <span>Name: {this.state.selectedNode.name}</span>
                            <span>Version: {this.state.selectedNode.version}</span>
                            <span>Group: {this.state.selectedNode.group}</span>
                            <span>Cpu: {this.state.selectedNode.cpu}</span>
                            <span>Memory: {this.state.selectedNode.memory}</span>
                            <span>Deploy_user: {this.state.selectedNode.deploy_user}</span>
                            <span>Last_deploy: {this.state.selectedNode.last_deploy}</span>
                            <span>Owner: {this.state.selectedNode.owner}</span>
                            <span>Team: {this.state.selectedNode.team}</span>
                            <span>Status: {this.state.selectedNode.status}</span>
                            <span>Raml_uri: {this.state.selectedNode.raml_uri}</span>
                            <span>New_relic: {this.state.selectedNode.new_relic}</span>
                            <span>Ambiente_deploy: {this.state.selectedNode.ambiente_deploy}</span>
                            <span>uri: {this.state.selectedNode.uri}</span>
                         </div>
                </div>) : null }
                </div>
            )}
            </div>
            
        );
    }
}



export default GraphContainer;
