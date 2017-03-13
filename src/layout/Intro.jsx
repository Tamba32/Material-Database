import React from 'react';

import Buttons from './../components/buttons/Buttons.jsx';
import Backstory from './../components/intro/Backstory.jsx';
import Details from './../components/intro/Details.jsx';

class Intro extends React.Component {
  
  constructor() {
    super();
    this.state = {
      tab: 'backstory'
    };
    
    this.setButton = this.setButton.bind(this);
  }
  
  get tabs() {
    return ['backstory', 'details'];
  }
  
  setButton(tab) {
    this.setState({tab});
  }
  
  get content() {
    switch(this.state.tab) {
      case 'backstory':
        return <Backstory/>;
      case 'details':
        return <Details/>;
      default:
        break;
    }
  }
  
  render() {
    return (
      <section id="intro">
        <div className="intro-card">
          <h2 className="intro-header">Material Design | MIT Student Group Database</h2>
          <Buttons buttonState={this.state.tab}
            setButtonState={this.setButton} buttons={this.tabs}/>
          {this.content}
        </div>
      </section>
    );
  }
}

export default Intro;