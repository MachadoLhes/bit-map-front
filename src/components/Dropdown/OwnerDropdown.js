import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { getOwners } from "../../utils"

// const teams =  axios.get('http://ec2-18-207-164-75.compute-1.amazonaws.com:8080/teams').then(res => {
// 		const nodes = res.data;
// 		return nodes.map(node => {
// 			return { 'id': node.id, 'name':node.name }
// 		})})
// const stateOptions = [{ key: 'eu', value: 'eu', text: 'Eu' }, { key: 'vc', value: 'vc', text: 'Você' }, { key: 'ZB', value: 'ZB', text: 'Zoobomafoo' }]

class Owner extends React.Component {
  state = {}

  componentDidMount() {
    getOwners().then(res => {
      this.setState({ owners: res })
    })
  }

  handleChange = (e, { value }) => {
    this.props.updateFilter({ owners: value })
  }

  render() {
    return (
      <Dropdown placeholder='Responsavel'
        onChange={this.handleChange}
        search
        selection
        options={this.state.owners} />
    )
  }
}

export default Owner