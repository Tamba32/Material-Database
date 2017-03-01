import React from 'react';

import IconButton from './IconButton.jsx';

class TableRow extends React.Component {
  
  constructor() {
    super();
    this.state = {
      hover: false
    };
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  onMouseEnterHandler() {
    this.setState({hover: true});
  }
  
  onMouseLeaveHandler() {
    this.setState({hover: false});
  }
  
  handleClick() {
    this.props.handleOpenClick(this.props.group.name);
  }
  
  get links() {
    const { group, isOpen } = this.props;
    if (isOpen || !this.state.hover) return;
    return (
      <div className="title-right-items">
        <IconButton website={group.website} />
        <IconButton />
      </div>
    );
  }
  
  get nickname() {
    if (!this.state.hover || !this.props.group.nickname) return;
    return ` (${this.props.group.nickname})`;
  }
  
  render() {
    const {name, groupStatus, desc } = this.props.group;
    return (
      <div className={"song-row" + (this.props.isOpen ? ' active' : '')}
        onClick={this.handleClick}
        onMouseEnter={this.onMouseEnterHandler}
        onMouseLeave={this.onMouseLeaveHandler}>
        <div className="row-cell" data-col="title" style={this.titleWidth}>
          {this.links}
          <span className="column-content tooltip">
            <span className="bold">{name}</span>
            <span className="grey">{this.nickname}</span>
          </span>
        </div>
        <div className="row-cell" data-col="status">{groupStatus.charAt(0)}</div>
        <div className="row-cell" data-col="details">{desc}</div>
      </div>
    );
  }
}

export default TableRow;