import React, { Component } from "react";
import { Graph } from "react-d3-graph";
import { getNodes, onClickNode, onMouseOverNode, myConfig, data, onClickLink, onMouseOverLink, onMouseOutLink, onMouseOutNode } from "../utils"
import renderIf from 'render-if'
import CustomInput from "./CustomInput";

class GraphContainer extends Component {
    state = {
        shouldDisplayInfoBox: false,
        selectedNode: []
    }

    onClickNode(nodeNumber) {
        let node = this.props.graph.nodes
        node = node.find(x => x.id === nodeNumber)
        this.setState({ shouldDisplayInfoBox: true, selectedNode: node })
        console.log(node)
    }

    componentDidMount() {
        this.setState({ graph: this.props.graph })
    }

    render() {
        return (
            <div>
                {renderIf(this.props.graph)(
                    <div className="graph-container">
                        <div style={{ 'max-width': '50vw' }}>
                            <Graph id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
                                data={this.props.graph}
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
                                    <p className="card-title">Name: {this.state.selectedNode.name}</p>

                                    <div className="card-body">
                                        
                                        <p className="card-item">Version: {this.state.selectedNode.version}</p>
                                        
                                        <p className="card-item">Group: {this.state.selectedNode.group}</p>
                                        
                                        <p className="card-item">Cpu: {this.state.selectedNode.cpu}</p>
                                        
                                        <p className="card-item">Memory: {this.state.selectedNode.memory}</p>
                                        
                                        <p className="card-item">Deploy_user: {this.state.selectedNode.deploy_user}</p>
                                        
                                        <p className="card-item">Last_deploy: {this.state.selectedNode.last_deploy}</p>
                                        
                                        <p className="card-item">
                                            Owner: {this.state.selectedNode.owner}
                                        </p>

                                        <p className="card-item">
                                            Team: {this.state.selectedNode.team}
                                        </p>

                                        <p className="card-item">
                                            Status: {this.state.selectedNode.status}
                                        </p>

                                        <p className="card-item">
                                            Raml_uri: {this.state.selectedNode.raml_uri}
                                        </p>
                                        
                                        <p className="card-item">
                                            New_relic: {this.state.selectedNode.new_relic}
                                        </p>

                                        <p className="card-item">
                                            Ambiente_deploy: {this.state.selectedNode.ambiente_deploy}
                                        </p>
                                        
                                        <p className="card-item">
                                            URI: {this.state.selectedNode.uri} 
                                        </p>
                                    </div>
                                </div>
                            </div>) : null}
                    </div>
                )}
            </div>

        );
    }
}



export default GraphContainer;
