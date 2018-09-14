import React, { Component } from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'

class CustomSearch extends Component {
    state = {
        campo: "teste"
    }

    render() {
        return (
            <Search input={{ icon: 'search', iconPosition: 'left' }} />
        );
    }

}

export default CustomSearch