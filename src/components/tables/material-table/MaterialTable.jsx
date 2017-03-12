import React from 'react';

import MaterialTableHeader from './MaterialTableHeader.jsx';
import MaterialTableBody from './MaterialTableBody.jsx';

const MaterialTable = props => {
  return (
    <div className="group-table">
      <h2 className="header-div">Groups</h2>
      <MaterialTableHeader
        groupsSort={props.groupsSort}
        changeSort={props.changeSort}
        />
      <MaterialTableBody groups={props.groups}
        searchState={props.searchState}
        buttonsState={props.buttonsState} 
      />
    </div>
  );
};

export default MaterialTable;