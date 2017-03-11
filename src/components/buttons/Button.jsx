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
    const { button, width } = this.props;
    return (
      <div onClick={this.handleClick} className={"tab" + this.active} 
        style={{width: width + "%"}}>
        {button}
      </div>
    );
  }
}

export default Button;
