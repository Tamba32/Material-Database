import React from 'react';

import TableRow from './TableRow.jsx';

class TableBody extends React.Component {
  
  get rows() {
    return this.props.groups.map((row, i) => (
      <TableRow key={i} row={row} style={this.props.style}/>
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

export default TableBody;