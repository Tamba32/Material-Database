import React from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

import IconButton from './IconButton.jsx';
import Card from './../../card/Card.jsx';

class MaterialTableRow extends React.Component {
  
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
    this.props.toggleClick(this.props.group.name);
  }
  
  get links() {
    const { group, isOpen } = this.props;
    if (isOpen || !this.state.hover) return;
    return (
      <div className="right-items">
        <IconButton website={group.website} />
        <IconButton />
      </div>
    );
  }
  
  get nickname() {
    if (!this.state.hover || !this.props.group.abbreviation) return;
    return " (" + this.props.group.abbreviation + ")";
  }
  
  get dbEntry() {
    return (
      <ReactCSSTransitionReplace
        key={0}
        transitionName="card-transition" 
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
        { this.props.isOpened ? 
          <Card group={this.props.group}/> :
          null}
      </ReactCSSTransitionReplace>
    );
  }
  
  render() {
    const {name, groupStatus, desc } = this.props.group;
    return (
      <div>
        <div className={"body-row" + (this.props.isOpened ? ' active' : '')}
          onClick={this.handleClick}
          onMouseEnter={this.onMouseEnterHandler}
          onMouseLeave={this.onMouseLeaveHandler}>
          <div className="row-cell" data-col="title" style={this.titleWidth}>
            {this.links}
            <span className="column-content">
              <span className="bold">{name}</span>
              <span className="grey">{this.nickname}</span>
            </span>
          </div>
          <div className="row-cell" data-col="status">{groupStatus.charAt(0)}</div>
          <div className="row-cell" data-col="details">{desc}</div>
        </div>
        {this.dbEntry}
      </div>  
    );
  }
}

export default MaterialTableRow;