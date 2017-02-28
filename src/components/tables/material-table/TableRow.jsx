import React from 'react';

class TableRow extends React.Component {
  
  constructor(props) {
    super(props);
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
        <div className="paper-icon-button-0" disabled={!group.website}>
          <a target="_blank" href={group.website ? group.website : ''}>
            <i className="icon ion-ios-world-outline"></i>
          </a>
        </div>
        <div className="paper-icon-button-0">
          <i className="icon ion-android-more-vertical"></i>
        </div>
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