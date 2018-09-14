import mock_nodes from '../mock_nodes.json';
import mock_relations from '../mock_relations.json';
import axios from "axios";

export const getNodes = async function() {
	const nodeResponse = await axios.get('http://ec2-18-207-164-75.compute-1.amazonaws.com:8080/app').then(res => {
		const nodes = res.data;
		return nodes.map(node => {
			return { 'id': node.id }
		})})
	const linkResponse = await axios.get('http://ec2-18-207-164-75.compute-1.amazonaws.com:8080/relation').then(res => {
		const relations = res.data;
		return relations.map(relation => {
			return { 'source': relation.source, 'target': relation.target }
		})})
	
	return { 'nodes': nodeResponse, 'links': linkResponse }
	
};

// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
export const myConfig = {
	nodeHighlightBehavior: true,
	width: 800,
	height: 550,
	node: {
		color: 'gray',
		size: 1000,
		highlightStrokeColor: 'blue',
		symbolType: 'diamond',
		fontSize: 16,
		labelProperty: 'name',
	},
	link: {
		highlightColor: 'lightblue'
	}
};

// graph event callbacks
export const onClickNode = function(nodeId) {
	window.alert(`Clicked node ${nodeId}`);
};

export const onMouseOverNode = function(nodeId) {
	
};

export const onMouseOutNode = function(nodeId) {
	
};

export const onClickLink = function(source, target) {
	window.alert(`Clicked link between ${source} and ${target}`);
};

export const onMouseOverLink = function(source, target) {
	
};

export const onMouseOutLink = function(source, target) {
	
};
