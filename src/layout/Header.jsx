import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="mdl-layout__header">
        <span className="mdl-layout-title">Groups</span>
        <div className="mdl-layout-spacer"></div>
        <div className="search-bar">
          
        </div>
        <nav className="mdl-navigation">
          <div className="mdl-navigation__link" href="">Home</div>
          <div className="mdl-navigation__link" href="">FYSM</div>
          <div className="mdl-navigation__link" href="">Midway</div>
          <div className="mdl-navigation__link" href="">Help</div>
        </nav>
      </header>
    );
  }
}

export default Header;