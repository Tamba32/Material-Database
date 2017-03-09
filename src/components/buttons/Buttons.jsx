import React from 'react';

import Button from './Button.jsx';

class Buttons extends React.Component {
  
  get buttons() {
    const { buttons, setButtonState, buttonState } = this.props;
    return buttons.map((button, i) => (
      <Button key={i} button={button} setButtonState={setButtonState}
        buttonState={buttonState}
      />
    )); 
  }
  
  render() {
    return (
      <div className="buttons">
        {this.buttons}
      </div >
    );
  }
}

export default Buttons;