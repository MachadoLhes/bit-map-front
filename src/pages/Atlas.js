import React, {Component} from "react";
import Header from "../components/Header"
import Filter from "../components/Filter"
import GraphContainer from "../components/GraphContainer";
import SideBar from "../components/SideBar";

class Atlas extends Component {

    render(){
        return(
            <div className="page-wrapper">
                <SideBar />
                <div className="content">
                    <Header pageTitle="Atlas" />
                    <Filter />
                    <GraphContainer />
                </div>
            </div>
        );
    }
}

export default Atlas; 