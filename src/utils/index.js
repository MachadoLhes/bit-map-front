import mock_nodes from '../mock_nodes.json';
import mock_relations from '../mock_relations.json';

export const getNodes = function() {
	return mock_nodes.map(node => {
		return {'id': node.id, 'name': node.name}
	})
};
  
export const getLinks = function() {
	return mock_relations.map(relation => {
		return {'source': relation.source, 'target': relation.target}
	})
};

export const data = {
	nodes: getNodes(),
	links: getLinks()
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
		symbolType: 'square',
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
