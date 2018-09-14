import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class StatusDropdown extends React.Component {
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
        <Dropdown className="dropdown" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
                Status
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem>Healthy</DropdownItem>
                <DropdownItem>Unhealthy</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
  }
}