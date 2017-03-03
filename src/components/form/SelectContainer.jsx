import React from 'react';
import enhanceWithClickOutside from 'react-click-outside';

import DropdownList from './dropdown/DropdownList.jsx';

class SelectContainer extends React.Component {
  
  constructor() {
    super();
    
    this.state = {
      isOpened: false
    };
    
    this.setFilterState = this.setFilterState.bind(this);
    this.toggleDropdownState = this.toggleDropdownState.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
  }
  
  setFilterState(el) {
    if(typeof(el) === "object") el = el.target.value;
    this.props.setFilterState(this.props.id, el);
  }
  
  setSelectFilterState(el) {
    this.props.setFilterState(el);
  }
  
  toggleDropdownState() {
    this.setState({isOpened: this.state.isOpened ? false : true});
  }
  
  handleClick() {
    this.toggleDropdownState();
  }
  
  handleCloseClick() {
    this.setState({isOpened: false});
  }
  
  handleClickOutside() {
    this.setState({isOpened: false});
  }
  
  render() {
    if (this.props.type === "new") {
      return (
        <div className={`textfield${this.state.isOpened ? ' isFocused' : ''}`}>
          <label className="textfield-label">{this.props.label}</label>
          <div className="textfield-input" onClick={this.handleClick}>
            {this.props.filterState}
          </div>
            <DropdownList choices={this.props.choices}
              handleCloseClick={this.handleCloseClick}
              isOpened={this.state.isOpened}
              setFilterState={this.setFilterState}/>
        </div>
      );
    } else {
      return (
        <tr>
          <th>
            <label>{this.props.label + ":"}</label>
          </th>
          <td>
            <select value={this.props.filterState} onChange={this.setFilterState}>
              {this.props.choices.map((choice, i) => (
                <option key={i} value={choice} 
                  selected={(choice === this.props.filterState)}>
                  {choice === "All" ? "---------" : choice}
                </option>
              ))}
            </select> 
          </td>
        </tr>
      );
    }
  }
}

export default enhanceWithClickOutside(SelectContainer);