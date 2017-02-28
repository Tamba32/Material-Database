import React from 'react';

class TableRow extends React.Component {
  
  get rowClassName() {
    if (this.props.style === "material") return;
    switch(this.props.row.status) {
      case 'Active':
        return 'group-status-active group-active-True';
      case 'Derecognized':
        return 'group-status-derecognized group-active-False';
      case 'Suspended':
        return 'group-status-suspended group-active-True';
      case 'Non-Group Entity':
        return 'group-status-nge group-active-False';
      default:
        break;
    }
  }
  
  get statusClassName() {
    return this.props.style === 'old' ? 'group-status' : null;
  }
  
  get cellClassName() {
    return this.props.style === 'old' ? 'table-header' : null;
  }
  
  render() {
    return (
      <tr className={this.rowClassName}>
        <td className={this.cellClassName}>{this.props.row.name}</td>
        <td className={this.cellClassName}>{this.props.row.nickname}</td>
        <td className={this.statusClassName}>{this.props.row.status}</td>
        <td><a href={this.props.row.website}>Website</a></td>
        <td><a href={this.props.row.db}>DB</a></td>
        <td>{this.props.row.desc}</td>
        <td>{this.props.row.time}</td>
      </tr>
    );
  }
}

export default TableRow;