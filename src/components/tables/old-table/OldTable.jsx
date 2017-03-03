import React from 'react';

import { GROUPS } from './../../../js/groups.js';

import TableHeader from './TableHeader.jsx';
import TableBody from './TableBody.jsx';

class Table extends React.Component {
  render() {
    return (
      <div>
        <table className="pretty-table group-list">
          <TableHeader style={this.props.style}/>
          <TableBody groups={GROUPS} style={this.props.style}/>
        </table>
      </div>
    );
  }
}

export default Table;