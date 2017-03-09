import React from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import _ from 'underscore';

import MaterialTableRow from './MaterialTableRow.jsx';

class MaterialTableBody extends React.Component {
  
  constructor() {
    super();
    
    this.state = {
      isOpened: ''
    };
    
    this.filter = this.filter.bind(this);
    this.handleOpenClick = this.handleOpenClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.toggleClick = this.toggleClick.bind(this);
  }
  
  toggleClick(row) {
    this.state.isOpened === row ? 
    this.handleCloseClick() :
    this.handleOpenClick(row) ;
  }
  
  handleOpenClick(isOpened) {
    this.setState({isOpened});
  }
  
  handleCloseClick() {
    this.setState({isOpened: ''});
  }
  
  filter(group) {
    const buttons = this.props.buttonsState;
    const searches = this.props.searchState;
    const filterTests = Object.keys(buttons).map(category => (
      (group[category] === buttons[category]) || (buttons[category] === 'All')));
    const searchTests = Object.keys(searches).map(search => {
      const searchValue = searches[search].trim().toLowerCase();
      if (searchValue.length > 0) {
        if (group[search] === null) return false;
        return group[search].toLowerCase().match(searchValue);
      }
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
        transitionName="table-transition" 
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
        {(_.where(filteredGroups, {...group})).length ?
          <MaterialTableRow key={group.id} group={group}
            toggleClick={this.toggleClick} 
            isOpened={group.name === this.state.isOpened}/> :
          null
        }
      </ReactCSSTransitionReplace>
    ));
  }
  
  render() {
    return (
      <div>
        {this.rows}
        {this.dbEntry}
      </div>
    );
  }
}

export default MaterialTableBody;