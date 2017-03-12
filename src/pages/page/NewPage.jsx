import React from 'react';

import Groups from './../../layout/Groups.jsx';

const NewPage = () => {
  return (
    <div id="new-page">
      <header className="header">
        <span className="header-title">Groups</span>
        <div className="header-spacer"></div>
        <nav className="header-nav">
          <div className="nav-link">Home</div>
          <div className="nav-link">FYSM</div>
          <div className="nav-link">Midway</div>
          <div className="nav-link">Help</div>
        </nav>
      </header>
      <div className="jumbotron-container">
        <div className="jumbotron">
          <Groups type="new"/>
        </div>
      </div>
    </div>
  );
};

export default NewPage;