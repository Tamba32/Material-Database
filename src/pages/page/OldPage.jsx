import React from 'react';

import Groups from './groups/Groups.jsx';

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
          </div>
        </div>
      </div>
    );
  }
}

export default OldPage;