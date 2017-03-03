import React from 'react';

import Groups from './groups/Groups.jsx';

const NewPage = () => {
  return (
    <div id="new-page">
      <header className="mdl-layout__header">
        <span className="mdl-layout-title">Groups</span>
        <div className="mdl-layout-spacer"></div>
        <nav className="mdl-navigation">
          <div className="mdl-navigation__link" href="">Home</div>
          <div className="mdl-navigation__link" href="">FYSM</div>
          <div className="mdl-navigation__link" href="">Midway</div>
          <div className="mdl-navigation__link" href="">Help</div>
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