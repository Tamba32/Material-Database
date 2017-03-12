import React from 'react';

import OldTableHeader from './OldTableHeader.jsx';
import OldTableBody from './OldTableBody.jsx';

const OldTable = props => {
  return (
    <div>
      <table className="pretty-table group-list">
        <OldTableHeader/>
        <OldTableBody groups={props.groups}
          searchState={props.searchState}
          buttonsState={props.buttonsState} 
        />
      </table>
    </div>
  );
};

export default OldTable;