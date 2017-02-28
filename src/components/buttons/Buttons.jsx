import React from 'react';

import Button from './Button.jsx';

class Buttons extends React.Component {
  
  get buttons() {
    const { buttons, groupId, buttonsType, 
            setButtonGroupState, buttonGroupState } = this.props;
    return buttons.map((button, i) => (
      <Button key={i} button={button} groupId={groupId}
          setButtonGroupState={setButtonGroupState}
          buttonsType={buttonsType} buttonGroupState={buttonGroupState}/>
    )); 
  }
  
  render() {
    if (this.props.buttonsType === 'div') {
      return (
        <div className="buttons">
          {this.buttons}
        </div>
      );
    } else {
      return (
        <ul className="tab-navigation">
          {this.buttons}
        </ul>
      );
    }
  }
}

export default Buttons;