import React from 'react';
 
class FilterForm extends React.Component{
  constructor() {
    super();
    
    this.state = {
      sex: ''
    };
    
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(sex) {
    this.setState({sex});
  }
  
  get data() {
    return [
      { name: 'Matthew', sex: 'male' },
      { name: 'Amanda', sex: 'female' }
    ];
  }
  
  render() {
    // create list of options from input data (based on sex)
    var optionsArray = this.data.map((item) => { return item.sex });
    optionsArray.unshift("");
    return ( 
      <div className="filter-form">
        <h1>Filter Form</h1>
        <FilterOptions options={optionsArray} selected={this.state.sex} 
                       changeOption={this.handleChange} /> 
        <FilterItems data={this.data} filter={this.state.sex} />
      </div>
    );
  }
}

class FilterOptions extends React.Component {
  
  constructor(){
    super();
    
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    var val = e.target.value;
    this.props.changeOption(val);
  }
  
  render() {
    var selectedOption = this.props.selected;
    return ( 
      <select id="sex" value={selectedOption} onChange={this.handleChange}>
        {this.props.options.map(option => (
          <option key={option} value={option} 
            selected={(option.value === selectedOption)}>
            {option}
          </option>
        ))}
      </select> 
    );
  }
}

class FilterItems extends React.Component {
  
  render() {
    var filter = this.props.filter;
    var filteredData = this.props.data.filter(item => (!filter || item.sex === filter));

    return (
      <div className="filter-item">
        {filteredData.map((item, i) => (<div key={i}>{item.name}</div>))}
      </div>
    );
  }
}

export default FilterForm;