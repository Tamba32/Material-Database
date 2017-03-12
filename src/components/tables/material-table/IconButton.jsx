import React from 'react';

class IconButton extends React.Component {
  
  constructor() {
    super();
    this.state = {
      hover: false
    };
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
  }
  
  onMouseEnterHandler() {
    this.setState({hover: true});
  }
  
  onMouseLeaveHandler() {
    this.setState({hover: false});
  }
  
  get tooltip() {
    const und = this.props.website === undefined;
    return (
      <div className={`tooltip${this.state.hover ? ' is-active' : ''}`}>
        {und ? 'DB Entry' : 'Website'}
      </div> 
    );
  }
  
  render() {
    const { website } = this.props;
    const und = website === undefined;
    const icon = <i className={`icon ion-${!und ?
                                'ios-world-outline' :
                                'android-more-vertical'}`}></i>;
    let inside;
    if (und) inside = icon;
    else inside = (
      <a target="_blank" href={website ? website : ''}>
        {icon}
      </a>
    );
    return (
      <div className="icon-button" disabled={und ? false : !website}
        onMouseEnter={this.onMouseEnterHandler}
        onMouseLeave={this.onMouseLeaveHandler}>
        {inside}
        {this.tooltip}
      </div>
    );
  }
}

export default IconButton;