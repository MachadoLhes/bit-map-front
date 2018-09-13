import React from "react";
import { Link } from "react-router-dom";

const MenuItem = props => {
	return (
		<div className="menu-item">
		<Link to={props.path}>
			<h4>{props.item}</h4>
		</Link>
		</div>
	);
};

export default MenuItem;