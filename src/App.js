import React, { Component } from 'react';
import Pages from './pages/Pages.jsx';
import './css/old.css';
import './css/new.css';
// import './css/table2.css';
import Buttons from './components/buttons/Buttons.jsx';
import Intro from './layout/Intro.jsx';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      tab: 'old'
    };
    
    this.setButton = this.setButton.bind(this);
  }
  
  get tabs() {
    return ['old','new', 'side by side'];
  }
  
  setButton(tab) {
    this.setState({tab});
  }
  
  render() {
    return (
      <div>
        <Intro/>
        <Buttons buttonState={this.state.tab}
          setButtonState={this.setButton} buttons={this.tabs}/>
        <Pages pageState={this.state.tab}/>
      </div>
    );
  }
}

export default App;
