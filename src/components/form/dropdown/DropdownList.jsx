import React from 'react';

import DropdownItem from './DropdownItem.jsx';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import enhanceWithClickOutside from 'react-click-outside';

class DropdownList extends React.Component {
  
  get items() {
    return this.props.choices.map((item, i) => (
      <DropdownItem key={i} item={item}
        setFilterState={this.props.setFilterState}
        handleCloseClick={this.props.handleCloseClick}
      />
    ));
  }
  
  render() {
    return (
      <ReactCSSTransitionReplace
        key={0}
        transitionName="cross-fade2" 
        transitionEnterTimeout={280}
        transitionLeaveTimeout={280}>
        {this.props.isOpened ?
          <div className="mf-select-dropdown-menu">
            <ul>
              {this.items}
            </ul>
          </div> :
          null
        }
      </ReactCSSTransitionReplace>
    );
  }
}


class DropdownListContainer extends React.Component {
  
  constructor() {
    super();
    
    this.state = {
      isOpened: false
    };
    
    this.setFilterState = this.setFilterState.bind(this);
    this.toggleDropdownState = this.toggleDropdownState.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
  }
  
  setFilterState(el) {
    this.props.setFilterState(this.props.id, el);
  }
  
  toggleDropdownState() {
    this.setState({isOpened: this.state.isOpened ? false : true});
  }
  
  handleClick() {
    this.toggleDropdownState();
  }
  
  handleCloseClick() {
    this.setState({isOpened: false});
  }
  
  handleClickOutside() {
    this.setState({isOpened: false});
  }
  
  render() {
    return (
      <div className="mui-textfield">
        <label>{this.props.label}</label>
        <div className="input" onClick={this.handleClick}>
          {this.props.filterState}
        </div>
          <DropdownList choices={this.props.choices}
          handleCloseClick={this.handleCloseClick}
          isOpened={this.state.isOpened}
          setFilterState={this.setFilterState}/>
      </div>
    );
  }
}

export default enhanceWithClickOutside(DropdownListContainer);