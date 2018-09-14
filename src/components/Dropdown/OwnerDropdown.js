import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class OwnerDropdown extends React.Component {
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
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
                Responsável
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem>Eu</DropdownItem>
                <DropdownItem>Você</DropdownItem>
                <DropdownItem>Zoobomafoo</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
  }
}