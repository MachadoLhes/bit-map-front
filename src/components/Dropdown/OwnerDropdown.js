import React from 'react'
import { Dropdown } from 'semantic-ui-react'

// const teams =  axios.get('http://ec2-18-207-164-75.compute-1.amazonaws.com:8080/teams').then(res => {
// 		const nodes = res.data;
// 		return nodes.map(node => {
// 			return { 'id': node.id, 'name':node.name }
// 		})})
const stateOptions = [ { key: 'eu', value: 'eu', text: 'Eu' }, { key: 'vc', value: 'vc', text: 'Você' }, { key: 'ZB', value: 'ZB', text: 'Zoobomafoo' }]

const Owner = () => (
  <Dropdown placeholder='Responsável' search selection options={stateOptions} />
)

export default Owner