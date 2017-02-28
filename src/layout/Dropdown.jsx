import React from 'react';

class Dropdown extends React.Component {
  render() {
    return (
      <div className="mf-select">
        <div className="mf-select-dropdown-menu">
          <ul>
            <li data-value="Rock">Rock</li>
            <li data-value="Pop">Pop</li>
            <li data-value="Alternative">Alternative</li>
            <li data-value="house">House</li>
            <li data-value="Rock">Rock</li>
            <li data-value="Pop">Pop</li>
            <li data-value="Alternative">Alternative</li>
            <li data-value="house">House</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Dropdown;