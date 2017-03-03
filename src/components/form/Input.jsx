import React from 'react';

class Input extends React.Component {
  
  constructor() {
    super();
    
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
  }
  
  handleFocus() {
    this.props.handleFocus(this.props.searchType);
  }
  
  handleBlur() {
    this.props.handleBlur(this.props.searchType);
  }
  
  handleChange(e) {
    this.props.changeSearch(e);
  }
  
  render() {
    const {value, type, searchType, focused } = this.props;
    if (type === "new") {
      return (
        <div className={`textfield ${focused || value ? 'isFocused' : ''}`}>
          <label className="textfield-label">
            {searchType === 'name' ? 'Name Contains' : 'Abbreviation Contains'}
          </label>
          <input type="text" 
            className="textfield-input"
            value={value} 
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChange={this.handleChange}/>
        </div>
      );
    } else return (
      <tr>
        <th>
          <label>{searchType === 'name' ? 'Name Contains:' : 'Abbreviation Contains:'}</label>
        </th>
        <td>
          <input type="text" value={value} onChange={this.handleChange}/>
        </td>
      </tr>
    );
  }
}

export default Input;