import React, { Component } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

class Filter extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			dropdownOpen: false
		};
	}

	toggle() {
		this.setState(prevState => ({
			dropdownOpen: !prevState.dropdownOpen
		}));
	}

	render() {
		return (
			<div className="filter">
				<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
					<DropdownToggle caret>
						Dropdown
					</DropdownToggle>
					<DropdownMenu right>

					</DropdownMenu>
      	</Dropdown>
			</div>
		);
	}
};

export default Filter;
