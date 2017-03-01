import React from 'react';

import FYSM from './page/FYSM.jsx';
import Groups from './page/groups/Groups.jsx';
import Home from './page/Home.jsx';
import Midway from './page/Midway.jsx';
import Help from './page/Help.jsx';

import Buttons from './../components/buttons/Buttons.jsx';
import FilterForm from './../components/form/FormExample.jsx';
import Header from './../layout/Header.jsx';
import Dropdown from './../layout/Dropdown.jsx';

class Pages extends React.Component {
  
  get tabs() {
    return ['home', 'groups', 'fysm', 'midway', 'help'];
  }
  
  constructor() {
    super();
    this.state = {
      page: 'groups',
    };
    
    this.setPage = this.setPage.bind(this);
  }
  
  setPage(page) {
    this.setState({page});
  }
  
  get content() {
    switch (this.state.page) {
      case 'home':
        return <Home key={0}/>;
      case 'groups':
        return <Groups key={1}/>;
      case 'fysm':
        return <FYSM key={2}/>;
      case 'midway':
        return <Midway key={2}/>;
      case 'help':
        return <Help key={2}/>;
      default:
        break;
    }
  }
  
  render() {
    return (
      <div id="pages">
        <div id="old-page">
          <Buttons buttonsType="ul" buttonGroupState={this.state.page}
            setButtonGroupState={this.setPage} buttons={this.tabs}/>
          <div id="content"> //old content
            <div className="curuser">
              <div className="spacer"></div>
              <p>You are not logged in.</p>
              <p><a href="">Login</a></p>
            </div>
            <FilterForm/>
          </div>
        </div>
        <div id="new-page">
          <div className="jumbotron">

            <Header/>
            {this.content}
          </div>
        </div>
      </div>
    );
  }
}

export default Pages;