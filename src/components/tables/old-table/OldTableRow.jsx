import React from 'react';

class OldTableRow extends React.Component {
  
  get rowClassName() {
    switch(this.props.row.groupStatus) {
      case 'Active':
        return 'group-status-active group-active-True';
      case 'Applying':
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
    const {name, abbreviation, groupStatus, website, desc, id, meetingTime } = this.props.row; 
    return (
      <tr className={this.rowClassName}>
        <td className="table-header">{name}</td>
        <td className="table-header">{abbreviation}</td>
        <td className="group-status">{groupStatus}</td>
        <td><a target="_blank" href={website}>{website ? 'Website' : ''}</a></td>
        <td><a target="_blank" href={`https://asa.mit.edu/groups/${id.toString()}/`}>DB Entry</a></td>
        <td>{desc}</td>
        <td>{meetingTime}</td>
      </tr>
    );
  }
}

export default OldTableRow;