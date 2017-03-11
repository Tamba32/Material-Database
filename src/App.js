import React, { Component } from 'react';
import Pages from './pages/Pages.jsx';
import './css/old.css';
import './css/new.css';
// import './css/table2.css';
import Intro from './layout/Intro.jsx';

class App extends Component {

  render() {
    return (
      <div id="page-card">
        <Intro/>
        <Pages/>
      </div>
    );
  }
}

export default App;
