import React from 'react';

import Buttons from './../../components/buttons/Buttons.jsx';
import FilterForm from './../../components/form/FormExample.jsx';
import OldTable from './../../components/tables/old-table/OldTable.jsx';

class OldPage extends React.Component {
  
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
  
  render() {
    return (
      <div id="old-page">
        <Buttons buttonGroupState={this.state.page}
          setButtonGroupState={this.setPage} buttons={this.tabs}/>
        <div id="content">
          <div className="curuser">
            <div className="spacer"></div>
            <p>You are not logged in.</p>
            <p><a href="">Login</a></p>
          </div>
          <div className="group-list-page">
            <FilterForm/>
            <OldTable/>
          </div>
        </div>
      </div>
    );
  }
}

export default OldPage;