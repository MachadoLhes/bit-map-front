import React from 'react'
import { Dropdown } from 'semantic-ui-react'

// const teams = await axios.get('http://ec2-18-207-164-75.compute-1.amazonaws.com:8080/teams').then(res => {
// 		const nodes = res.data;
// 		return nodes.map(node => {
// 			return { 'id': node.id, 'name':node.name }
// 		})})
const stateOptions = [ { key: 'GL', value: 'GL', text: 'Glete' }, { key: 'TMB', value: 'TMB', text: 'Tamboré' }]

const Deploy = () => (
  <Dropdown placeholder='Ambiente de Deploy' search selection options={stateOptions} />
)

export default Deploy