import React from 'react';

class MaterialTableHeader extends React.Component {
  
  constructor() {
    super();
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.props.changeSort();
  }
  
  get arrowDirection() {
    return this.props.groupsSort === 'forward' ? ' down' : ' up';
  }
  
  render() {
    return (
      <div className="header-row">
        <div className="header-cell" data-col="title" onClick={this.handleClick}>
          <span>Name</span>
          <i className={"ion ion-arrow-down-c" + this.arrowDirection}></i>
        </div>
        <div className="header-cell" data-col="status">Status</div>
        <div className="header-cell" data-col="details">Details</div>
      </div>
    );
  }
}

export default MaterialTableHeader;