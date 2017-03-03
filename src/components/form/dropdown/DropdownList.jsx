import React from 'react';

import DropdownItem from './DropdownItem.jsx';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

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
        transitionName="dropdown-transition" 
        transitionEnterTimeout={280}
        transitionLeaveTimeout={280}>
        {this.props.isOpened ?
          <div key={0} className="dropdown-menu">
            <ul className="dropdown-list">
              {this.items}
            </ul>
          </div> :
          null
        }
      </ReactCSSTransitionReplace>
    );
  }
}

export default DropdownList;