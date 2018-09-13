import React, {Component} from "react";
import Header from "../components/Header"
import Filter from "../components/Filter"
import GraphContainer from "../components/GraphContainer";
import SideBar from "../components/SideBar";

class Americanas extends Component {

    render(){
        return(
            <div className="page-wrapper">
                <SideBar />
                <div className="content">
                    <Header pageTitle="Americanas" />
                    <Filter />
                    <GraphContainer />
                </div>
            </div>
        );
    }
}

export default Americanas; 