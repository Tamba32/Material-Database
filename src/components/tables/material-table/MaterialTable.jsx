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
      <div className="album-view">
        <div className="material-album">
          <div className="song-table tight" data-type="album">
            <TableHeader
              groupsSort={this.props.groupsSort}
              changeSort={this.props.changeSort}
              />
            <TableBody groups={this.props.groups}
              // style={this.props.style}
              searchState={this.props.searchState}
              buttonsState={this.props.buttonsState} 
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Table;