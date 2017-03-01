import React from 'react';

class Dropdown extends React.Component {
  
  render() {
    return (
      <div className="mf-select">
        <div className="mf-select-dropdown-menu">
          <ul>
            <li data-value="Rock">Rock</li>
            <li data-value="Rock">Rock</li>
            <li data-value="Rock">Rock</li>
            <li data-value="Rock">Rock</li>
            <li data-value="Rock">Rock</li>
            <li data-value="Rock">Rock</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Dropdown;