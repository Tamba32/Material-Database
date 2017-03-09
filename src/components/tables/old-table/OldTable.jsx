import React from 'react';

import OldTableHeader from './OldTableHeader.jsx';
import OldTableBody from './OldTableBody.jsx';

class OldTable extends React.Component {
  render() {
    return (
      <div>
        <table className="pretty-table group-list">
          <OldTableHeader/>
          <OldTableBody groups={this.props.groups}
            searchState={this.props.searchState}
            buttonsState={this.props.buttonsState} 
          />
        </table>
      </div>
    );
  }
}

export default OldTable;