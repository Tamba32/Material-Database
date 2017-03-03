import React from 'react';

class DropdownItem extends React.Component {
  
  constructor() {
    super();
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.props.setFilterState(this.props.item);
    this.props.handleCloseClick();
  }
  
  render() {
    return (
      <li className="dropdown-item" onClick={this.handleClick}>
        {this.props.item}
      </li>
    );
  }
}

export default DropdownItem;