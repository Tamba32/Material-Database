import React from 'react';

class CardTextfield extends React.Component {
  
  get label() {
    if (this.props.label === 'id') return 'ID';
    return this.props.label
                    .replace(/([A-Z])/g, ' $1')
                    .replace(/^./, str => (str.toUpperCase()));
  }
  
  render() {
    const { website } = this.props;
    const und = (website === undefined || website === null);
    let inside;
    if (und) inside = this.props.value || 'None';
    else {inside = (
      <a target="_blank" href={website}>
        {website}
      </a>
    )}
    return (
      <div className="textfield" style={website ? {maxWidth: "50%", overflowWrap: 'break-word'} : {}}>
        <label className="textfield-label">{this.label}</label>
        <div className="textfield-input">
          {inside}
        </div>
      </div>
    );
  }
}

export default CardTextfield;