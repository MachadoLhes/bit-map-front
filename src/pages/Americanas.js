import React, {Component} from "react";
import Header from "../components/Header"
import Filter from "../components/Filter"
import { Graph } from "react-d3-graph";
import {onClickNode, onMouseOverNode, myConfig, data, onClickLink, onMouseOverLink, onMouseOutLink, onMouseOutNode} from "../utils"


class Americanas extends Component{

    render(){
        return(
            <div>
                <Header pageTitle="Americanas" />
                <Filter />
                <Graph id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
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

export default Americanas; 