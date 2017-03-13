import React from 'react';

import './css/old.css';
import './css/new.css';

import Pages from './pages/Pages.jsx';
import Intro from './layout/Intro.jsx';

const App = () => {
  return (
    <div id="page-card-container">
      <div id="page-card">
        <Intro/>
        <Pages/>
      </div>
    </div>
  );
};

export default App;
