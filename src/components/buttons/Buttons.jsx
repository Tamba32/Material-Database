import React from 'react';

import Button from './Button.jsx';

class Buttons extends React.Component {
  
  get width() {
    return 100/this.props.buttons.length;
  }
  
  get style() {
    const { buttons, buttonState } = this.props;
    const width = this.width;
    const active = buttons.indexOf(buttonState);
    return {left: active*width + "%", width: width + "%"};
  }
  
  get buttons() {
    const { buttons, setButtonState, buttonState } = this.props;
    return buttons.map((button, i) => (
      <Button key={i} button={button} setButtonState={setButtonState}
        buttonState={buttonState} width={this.width}/>
    )); 
  }
  
  render() {
    return (
      <div className="tabs">
        {this.buttons}
        <div className="slide" style={this.style}></div>
      </div>
    );
  }
}

export default Buttons;