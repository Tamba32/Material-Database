import React from 'react';

class IconButton extends React.Component {
  
  constructor() {
    super();
    this.state = {
      hover: false
    };
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }
  
  onMouseEnterHandler() {
    this.setState({hover: true});
    console.log('we')
  }
  
  onMouseLeaveHandler() {
    this.setState({hover: false});
  }
  
  get tooltip() {
    const und = this.props.website === undefined;
    return (
      // this.state.hover ? 
      <div className={`mdl-tooltip${this.state.hover ? ' is-active' : ''}`}>
        {und ? 'DB Entry' : 'Website'}
      </div> 
      // : null
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
      <div className="paper-icon-button-0" disabled={und ? false : !website}
        onMouseEnter={this.onMouseEnterHandler}
        onMouseLeave={this.onMouseLeaveHandler}>
        {inside}
        {this.tooltip}
      </div>
    );
  }
}

export default IconButton;