import React from 'react';

import Groups from './../../layout/Groups.jsx';

const DBEntry = () => {
  return (
    <div>
      <h2>Group Database Entry (Example: Academic Teaching Initiative)</h2>
      <div className="toolbox">
        <h2>Tools</h2>
        <p>No tools available without 
          <a href="#">logging in</a>
          .
        </p>
      </div>
      <table className="pretty-table">
        <tbody>
          <tr>
            <th colSpan="2">Basic Information</th>
          </tr>
          <tr>
            <th>Name</th>
            <td>Academic Teaching Initiative</td>
          </tr>
          <tr>
            <th>Abbreviation</th>
            <td>ATI</td>
          </tr>
          <tr>
            <th>Group ID</th>
            <td>1912</td>
          </tr>
          <tr>
            <th>Type</th>
            <td>Service</td>
          </tr>
          <tr>
            <th>Description</th>
            <td>
              The Academic Teaching Initiative provides low-cost academic-based
              enrichment programs geared towards high school students in the Boston
              and Cambridge area.
            </td>
          </tr>
          <tr>
            <th colSpan="2">Contact Information</th>
          </tr>
          <tr>
            <th>Website</th>
            <td><a href="http://ati.mit.edu/">http://ati.mit.edu/</a></td>
          </tr>
          <tr>
            <th>Meeting times</th>
            <td>Sundays 12pm-5pm</td>
          </tr>
          
          <tr>
            <th colSpan="2">Recognition</th>
          </tr>
          <tr>
            <th>Group status</th>
            <td>Active</td>
          </tr>
          <tr>
            <th>Group class</th>
            <td>Unfunded</td>
          </tr>
          <tr>
            <th>Recognition date</th>
            <td>May 20, 2011, midnight</td>
          </tr>
          <tr>
            <th colSpan="2">Financial Information</th>
          </tr>
          <tr>
            <th>Funding status</th>
            <td>None</td>
          </tr>
        </tbody>
      </table>
      <table className="pretty-table">
        <caption>Group Size</caption>
        <tbody>
          <tr>
            <th>Undergraduates</th>
            <th>Graduate Students</th>
            <th>MIT Community</th>
            <th>Other</th>
          </tr>
          <tr>
            <td>22</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

class OldPage extends React.Component {
  
  get tabs() {
    return ['Home', 'Groups', 'FYSM', 'Midway', 'Help'];
  }
  
  render() {
    return (
      <div id="old-page">
        <ul className="tab-navigation">
          {this.tabs.map((tab, i) => (
            <li key={i}>
              <a href="">{tab}</a>
            </li>
          ))}
        </ul>
        <div id="content">
          <div className="curuser">
            <div className="spacer"></div>
            <p>You are not logged in.</p>
            <p><a href="">Login</a></p>
          </div>
          <h1>MIT Student Groups</h1>
          <h2>Search</h2>
          <div className="group-list-page">
            <Groups type="old"/>
            <DBEntry/>
          </div>
        </div>
      </div>
    );
  }
}

export default OldPage;