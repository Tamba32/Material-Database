import React from 'react';

class TableRow extends React.Component {
  
  get rowClassName() {
    switch(this.props.row.groupStatus) {
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
  
  render() {
    return (
      <tr className={this.rowClassName}>
        <td className="table-header">{this.props.row.name}</td>
        <td className="table-header">{this.props.row.abbreviation}</td>
        <td className="group-status">{this.props.row.groupStatus}</td>
        <td><a href={this.props.row.website}>Website</a></td>
        <td><a href={this.props.row.db}>DB</a></td>
        <td>{this.props.row.desc}</td>
        <td>{this.props.row.meetingTime}</td>
      </tr>
    );
  }
}

export default TableRow;