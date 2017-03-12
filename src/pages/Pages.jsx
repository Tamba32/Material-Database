import React from 'react';

import NewPage from './page/NewPage.jsx';
import OldPage from './page/OldPage.jsx';
import Buttons from './../components/buttons/Buttons.jsx';

class Pages extends React.Component {
  
  constructor() {
    super();
    this.state = {
      tab: 'old'
    };
    
    this.setButton = this.setButton.bind(this);
  }
  
  get tabs() {
    return ['old', 'new', 'side by side'];
  }
  
  setButton(tab) {
    this.setState({tab});
  }
  
  get content() {
    switch(this.state.tab) {
      case 'old':
        return <OldPage/>;
      case 'new': 
        return <NewPage/>;
      case 'side by side':
        return (
          <div id="pages">
            <div className="page-container">
              <NewPage/>
            </div>
            <div className="page-container">
              <OldPage/>
            </div>
          </div>
        );
      default:
        break;
    }
  }
  
  render() {
    return (
      <div id="pages-container">
        <Buttons buttonState={this.state.tab}
          setButtonState={this.setButton} buttons={this.tabs}/>
        {this.content}
      </div>
    );
  }
}

export default Pages;