import React from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import _ from 'underscore';

import TableRow from './TableRow.jsx';
// import { GROUPS } from './../../../groups.js';

class TableBody extends React.Component {
  
  constructor() {
    super();
    
    this.state = {
      open: ''
    };
    this.filter = this.filter.bind(this);
    this.handleOpenClick = this.handleOpenClick.bind(this);
  }
  
  handleOpenClick(open) {
    this.setState({open});
  }
  
  filter(group) {
    const buttons = this.props.buttonsState;
    const searches = this.props.searchState;
    const filterTests = Object.keys(buttons).map(category => (
      (group[category] === buttons[category]) || (buttons[category] === 'All')));
    const searchTests = Object.keys(searches).map(search => {
      const searchValue = searches[search].trim().toLowerCase();
      if (searchValue.length > 0) return group[search].toLowerCase().match(searchValue);
      else return true;
    });
    return _.every(_.flatten([filterTests, searchTests]), test => test);
  }
  
  get rows() {
    const { groups } = this.props;
    const filteredGroups = groups.filter(this.filter);
    return groups.map((group, i) => (
      <ReactCSSTransitionReplace
        key={i}
        transitionName="cross-fade" 
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
        {(_.where(filteredGroups, {...group})).length ?
          <TableRow key={group.id} group={group} 
            // style={this.props.style} 
            handleOpenClick={this.handleOpenClick} 
            isOpen={group.name === this.state.open}/> : null
        }
      </ReactCSSTransitionReplace>
    ));
  }
  
  render() {
    return (
      <div className="body">
        {this.rows}
      </div>
    );
  }
}

export default TableBody;