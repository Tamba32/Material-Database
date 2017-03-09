import React from 'react';

class Button extends React.Component {
  
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.props.setButtonState(this.props.button);
  }
  
  get active() {
    return (this.props.buttonState === this.props.button ? ' active' : '');
  }
  
  render() {
    return (
      <div onClick={this.handleClick} className={"button" + this.active}>
        {this.props.button}
      </div>
    );
  }
}

export default Button;
