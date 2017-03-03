import React from 'react';

class Button extends React.Component {
  
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.props.setButtonGroupState(this.props.button);
  }
  
  get active() {
    return (this.props.buttonGroupState === this.props.button ? ' active' : '');
  }
  
  render() {
    return (
      <li onClick={this.handleClick} className={this.active}>
        <a>{this.props.button}</a>
      </li>
    );
  }
}

export default Button;
