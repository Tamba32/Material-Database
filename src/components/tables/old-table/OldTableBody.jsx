import React from 'react';
import _ from 'underscore';

import OldTableRow from './OldTableRow.jsx';

class OldTableBody extends React.Component {
  
  filter(group) {
    const buttons = this.props.buttonsState;
    const searches = this.props.searchState;
    console.log(this.props)
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
    const filteredGroups = this.props.groups.filter(this.filter.bind(this));
    return filteredGroups.map((row, i) => (
      <OldTableRow key={i} row={row}/>
    ));
  }
  
  render() {
    return (
      <tbody>
        {this.rows}
      </tbody>
    );
  }
}

export default OldTableBody;