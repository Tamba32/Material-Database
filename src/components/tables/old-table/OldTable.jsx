import React from 'react';

import TableHeader from './TableHeader.jsx';
import TableBody from './TableBody.jsx';

class Table extends React.Component {
  
  get className() {
    return this.props.style === 'old' ?
      'pretty-table group-list' : 
      'song-table tight';
  }
  
  render() {
    return (
      <div>
        <table className={this.className} data-type="album">
          <TableHeader style={this.props.style}/>
          <TableBody style={this.props.style}/>
        </table>
      </div>
    );
  }
}

export default Table;