import React from 'react';

import DropdownList from './dropdown/DropdownList.jsx';
import Input from './Input.jsx';

class Form extends React.Component {
  
  constructor() {
    super();
    
  }
  
  get searchInputs() {
    const { props } = this;
    const keys = Object.keys(props.searchValues);
    return keys.map((key, i) => (
      <Input key={i} type={key} handleFocus={props.handleFocus}
      handleBlur={props.handleBlur} value={props.searchValues[key]}
      focused={props.focusedValues[key]}
      changeSearch={key === 'name' ? props.changeNameSearch : props.changeAbbrevSearch}/>
    ));
  }
  
  get dropdownFilters() {
    return this.props.filters.map((filter, i) => (
      <DropdownList key={i} filterState={this.props.filterStates[filter.id]}
        choices={filter.choices} setFilterState={this.props.setFilterState}
        label={filter.title} id={filter.id}
      />
    ));
  }
  
  render() {
    return (
      <div id="filter-card">
        <div id="search-title">Search</div>
        <form>
          <div className="row">
            {this.searchInputs}
          </div>
          <div className="row">
            {this.dropdownFilters}
          </div>
        </form>
      </div>
    );
  }
}

export default Form;