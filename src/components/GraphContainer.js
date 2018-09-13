import React from "react";
import { Graph } from "react-d3-graph";
import {onClickNode, onMouseOverNode, myConfig, data, onClickLink, onMouseOverLink, onMouseOutLink, onMouseOutNode} from "../utils"

const GraphContainer = props => {
  return (
    <div className="graph-container">
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
};

export default GraphContainer;
