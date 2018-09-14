import React, { Component } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import DeployDropdown from "./Dropdown/DeployDropdown";
import OwnerDropdown from "./Dropdown/OwnerDropdown";
import TeamDropdown from "./Dropdown/Team";
import StatusDropdown from "./Dropdown/Status";
class Filter extends Component {
	
	render() {
		return (
			<div className="filter">
				<DeployDropdown />
				<OwnerDropdown />
				<TeamDropdown />
				<StatusDropdown />
			</div>
		);
	}
};

export default Filter;
