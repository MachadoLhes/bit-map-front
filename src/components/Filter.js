import React, { Component } from "react";
import DeployDropdown from "./Dropdown/DeployDropdown";
import OwnerDropdown from "./Dropdown/OwnerDropdown";
import TeamDropdown from "./Dropdown/Team";
import StatusDropdown from "./Dropdown/Status";
import DropdownExampleSearchSelectionTwo from "./DropdownExampleInlineTwo";
import CustomSearch from "./CustomSearch";

class Filter extends Component {

	render() {
		return (
			<div className="filter">
				<DeployDropdown />
				<OwnerDropdown />
				<TeamDropdown updateFilter={this.props.updateFilter} />
				<StatusDropdown />

				<div className="custom-search" >
					<CustomSearch />
				</div>
			</div>
		);
	}
};

export default Filter;
