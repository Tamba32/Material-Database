import React from 'react';

import NewPage from './page/NewPage.jsx';
import OldPage from './page/OldPage.jsx';

class Pages extends React.Component {
  
  render() {
    return (
      <div id="pages">
        <OldPage/>
        <NewPage/>
      </div>
    );
  }
}

export default Pages;