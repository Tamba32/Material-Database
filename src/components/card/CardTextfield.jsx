import React from 'react';

class CardTextfield extends React.Component {
  
  get label() {
    return this.props.label
                    .replace(/([A-Z])/g, ' $1')
                    .replace(/^./, str => (str.toUpperCase()));
  }
  
  get icon() {
    const { type } = this.props;
    if (!type) return;
    return (
      <div className="paper-icon-button-0">
        <i className={`icon ion-ios-${type === 'website' ? 'world' : 'clock'}-outline`}></i>
      </div>
    );
  }
  
  render() {
    return (
      <div className="mui-textfield">
        <label>{this.label}</label>
        <div className="input">
          {this.icon}
          {this.props.value}
        </div>
      </div>
    );
  }
}

export default CardTextfield;