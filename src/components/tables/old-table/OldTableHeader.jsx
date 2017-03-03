import React from 'react';

class OldTableHeader extends React.Component {
  
  get headerContent() {
    return [
      'Name', 'Abbreviation', 'Status', 'Website', 
      'ASA DB', 'Description', 'Meeting Time'
    ];
  }
  
  get header() {
    return this.headerContent.map((title, i) => (
      <th key={i}>{title}</th>)
    );
  }  
  
  render() {
    return (
      <thead>
        <tr>
          {this.header}
        </tr>
      </thead>
    );
  }
}

export default OldTableHeader;