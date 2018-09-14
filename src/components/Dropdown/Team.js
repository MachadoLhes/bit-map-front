import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import axios from 'axios'
import { getTeams } from "../../utils"

// const stateOptions = [ { key: 'PRC', value: 'PRC', text: 'Pricing' }, { key: 'PROD', value: 'PROD', text: 'Product' }]



class Team extends React.Component {

  state = {}

  componentDidMount() {
    getTeams().then(res => {
      this.setState({ teams: res })
    })
  }

  handleChange = (e, { value }) => {
    this.props.updateFilter({ team: value })
  }


  render() {
    return (
      <Dropdown placeholder='Time'
        onChange={this.handleChange}
        search
        selection
        options={this.state.teams} />
    )
  }
};

export default Team;