import React from 'react';

import MaterialTableHeader from './MaterialTableHeader.jsx';
import MaterialTableBody from './MaterialTableBody.jsx';

class MaterialTable extends React.Component {
  
  render() {
    return (
      <div className="group-table">
        <MaterialTableHeader
          groupsSort={this.props.groupsSort}
          changeSort={this.props.changeSort}
          />
        <MaterialTableBody groups={this.props.groups}
          searchState={this.props.searchState}
          buttonsState={this.props.buttonsState} 
        />
      </div>
    );
  }
}

export default MaterialTable;