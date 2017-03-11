import React from 'react';

import SelectContainer from './SelectContainer.jsx';
import Input from './Input.jsx';

class Form extends React.Component {
  
  get searchInputs() {
    const { props } = this;
    const keys = Object.keys(props.searchValues);
    return keys.map((key, i) => (
      <Input key={i} searchType={key} handleFocus={props.handleFocus}
        handleBlur={props.handleBlur} value={props.searchValues[key]}
        focused={props.focusedValues[key]} type={this.props.type}
        changeSearch={key === 'name' ? props.changeNameSearch : props.changeAbbrevSearch}
      />
    ));
  }
  
  get select() {
    return this.props.filters.map((filter, i) => (
      <SelectContainer key={i} filterState={this.props.filterStates[filter.id]}
        choices={filter.choices} setFilterState={this.props.setFilterState}
        label={filter.title} id={filter.id} type={this.props.type}
      />
    ));
  }
  
  get content() {
    if (this.props.type === "new") {
      return (
        <form>
          <h2 className="header-div">Search</h2>
          <div className="row">
            {this.searchInputs}
          </div>
          <div className="row">
            {this.select}
          </div>
        </form>
      );
    } else {
      return (
        <form>
          <table className="pretty-table">
            <tbody>
              {this.searchInputs}
              {this.select}
            </tbody>
          </table>
        </form>
      );
    }
  }
  
  render() {
    return (
      <div id={this.props.type === 'new' ? 'filter-card': ''}>
        {this.content}
      </div>
    );
  }
}

export default Form;