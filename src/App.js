import React, { Component } from 'react';

import './css/old.css';
import './css/new.css';

import Pages from './pages/Pages.jsx';
import Intro from './layout/Intro.jsx';

const App = () => {
  return (
    <div id="page-card">
      <Intro/>
      <Pages/>
    </div>
  );
};

export default App;
