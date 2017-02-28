import React from 'react';

class Button extends React.Component {
  
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    const { button, groupId, setButtonGroupState } = this.props;
    if (!groupId) setButtonGroupState(button);
    else setButtonGroupState(groupId, button);
  }
  
  get active() {
    return (this.props.buttonGroupState === this.props.button ? ' active' : '');
  }
  
  render() {
    if (this.props.buttonsType === 'div') {
      return (
        <div onClick={this.handleClick} className={"button" + this.active}>
          {this.props.button}
        </div>
      );
    } else {
      return (
        <li onClick={this.handleClick} className={this.active}>
          <a>{this.props.button}</a>
        </li>
      );
    }
  }
}

export default Button;
