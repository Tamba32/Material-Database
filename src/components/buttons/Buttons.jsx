import React from 'react';

import Button from './Button.jsx';

class Buttons extends React.Component {
  
  get buttons() {
    const { buttons, setButtonGroupState, buttonGroupState } = this.props;
    return buttons.map((button, i) => (
      <Button key={i} button={button} setButtonGroupState={setButtonGroupState}
        buttonGroupState={buttonGroupState}
      />
    )); 
  }
  
  render() {
    return (
      <ul className="tab-navigation">
        {this.buttons}
      </ul>
    );
  }
}

export default Buttons;