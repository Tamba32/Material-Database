import React from 'react';

class Input extends React.Component {
  
  constructor() {
    super();
    
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
  }
  
  handleFocus() {
    this.props.handleFocus(this.props.type);
  }
  
  handleBlur() {
    this.props.handleBlur(this.props.type);
  }
  
  handleChange(e) {
    this.props.changeSearch(e);
  }
  
  render() {
    const {value, type, focused } = this.props;
    return (
      <div className={`mdl-textfield ${focused || value ? 'isFocused' : ''}`}>
        <label className="mdl-textfield__label">
          {type === 'name' ? 'Name Contains' : 'Abbreviation Contains'}
        </label>
        <input type="text" 
          className="mdl-textfield__input"
          value={value} 
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleChange} />
      </div>
    );
  }
}

export default Input;