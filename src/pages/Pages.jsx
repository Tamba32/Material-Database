import React from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

import NewPage from './page/NewPage.jsx';
import OldPage from './page/OldPage.jsx';

class Pages extends React.Component {
  
  get content() {
    switch(this.props.pageState) {
      case 'old':
        return <OldPage/>;
      case 'new': 
        return <NewPage/>;
      case 'side by side':
        return (
          <div>
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
      <div id="pages">
        {this.content}
      </div>
    );
  }
}

export default Pages;