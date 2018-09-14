import React, { Component } from "react";
import Header from "../components/Header"
import Filter from "../components/Filter"
import GraphContainer from "../components/GraphContainer";
import SideBar from "../components/SideBar";
import { getNodes } from "../utils/index"

class Americanas extends Component {

    state = {

    }

    updateFilters(filters) {
        console.log(filters)
        this.setState(filters)
        this.updateNodes(filters)
    }


    componentDidMount() {
        getNodes(false).then(res => {
            this.setState({ graph: res })
        })
    }

    updateNodes(filters) {
        // if (filters.team && filters.state) {
        //     console.log("Entrou")
        getNodes(filters).then(res => {
            this.setState({ graph: res })
        })
        // } else {
        // getNodes(false).then(res => {
        // this.setState({ graph: res })
        // })
        // }
    }

    render() {
        return (
            <div className="page-wrapper">
                <SideBar />
                <div className="content">
                    <Header pageTitle="Americanas" />
                    <Filter updateFilter={this.updateFilters.bind(this)} />
                    <GraphContainer graph={this.state.graph} />
                </div>
            </div>
        );
    }
}

export default Americanas; 