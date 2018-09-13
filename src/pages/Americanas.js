import React, {Component} from "react";
import Header from "../components/Header"
import Filter from "../components/Filter"
import GraphContainer from "../components/GraphContainer";

class Americanas extends Component {

    render(){
        return(
            <div>
                <Header pageTitle="Americanas" />
                <Filter />
                <GraphContainer />
            </div>
        );
    }
}

export default Americanas; 