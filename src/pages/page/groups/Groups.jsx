import React from 'react';

import Buttons from './../../../components/buttons/Buttons.jsx';
import OldTable from './../../../components/tables/old-table/OldTable.jsx';
import MaterialTable from './../../../components/tables/material-table/MaterialTable.jsx';

import { GROUPS } from './groups.js';

const buttonsObj = [
  {
    id: 'category',
    type: '',
    title: 'Activity Categories',
    choices: ['All', 'Academic', 'Activism', 'Arts', 'Athletic', 'Campus Media',
    'Cultural', 'FSILG', 'Government', 'Interest', 'Recreational', 'Religious',
    'Service', 'Social', 'Technology', 'Other']
  },
  {
    id: 'groupStatus',
    type: '',
    title: 'Group Status',
    choices: ['All', 'Active', 'Suspended', 'Derecognized', 'Provisional', 
              'Non-Group Entity', 'Applying']
  },
  {
    id: 'groupClass',
    type: '',
    title: 'Group Class',
    choices: ['All', 'Sponsored', 'MIT-funded', 'Unfunded', 'Club Sport', 'Dorm/FSILG']
  },
  {
    id: 'groupFunding',
    type: '',
    title: 'Group Funding',
    choices: ['All', 'undergraduate', 'graduate', 'sports council']
  },
];

class SearchExample extends React.Component {

  constructor() {
    super();
    
    this.state = {
      searchString: ''
    };
    
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({searchString: e.target.value});
  }

  render() {
    let libraries = [
      { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
      { name: 'AngularJS', url: 'https://angularjs.org/'},
    ];
    const searchString = this.state.searchString.trim().toLowerCase();
    if (searchString.length > 0) {
      libraries = libraries.filter(l => (
        l.name.toLowerCase().match(searchString)
      ));
    }
    return (
      <div>
        <input type="text" 
          value={this.state.searchString} 
          onChange={this.handleChange} placeholder="Type here" />
        <ul> 
          {libraries.map((li, i) => (
            <li key={i}>{li.name} <a href={li.url}>{li.url}</a></li>
          ))}
        </ul>
      </div>
    );
  }
}


class GroupsPage extends React.Component {

  constructor() {
    super();
    this.state = {
      buttons : {
        category: 'All',
        groupClass: 'All',
        groupStatus: 'All',
        groupFunding: 'All',
      },
      groupsSort: 'front',
      search: {
        name: '',
        abbreviation: ''
      }
    };
    
    this.setButtonGroupState = this.setButtonGroupState.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAbbrevChange = this.handleAbbrevChange.bind(this);
  }
  
  handleNameChange(e) {
    this.setState({search: {...this.state.search, name: e.target.value}});
  }
  
  handleAbbrevChange(e) {
    this.setState({search: {...this.state.search, abbreviation: e.target.value}});
  }
  
  setButtonGroupState(groupId, button) {
    this.setState({
      buttons: {
        ...this.state.buttons, 
        [groupId]: button
      }
    });
  }
  
  handleSort() {
    this.setState(
      {groupsSort: this.state.groupsSort === 'front' ? 'reverse' : 'front'}
    );
  }
  
  get buttonGroups() {
    return buttonsObj.map((group, i) => (
      <Buttons key={i} buttons={group.choices} groupId={group.id}  
        setButtonGroupState={this.setButtonGroupState} buttonsType="div"
        buttonGroupState={this.state.buttons[group.id]}/>
    ));
  }
  
  get groups() {
    const state = this.state.groupsSort === 'front';
    return GROUPS.sort((a,b) => {
      if (a.name < b.name) return state ? -1 : 1;
      if (a.name > b.name) return state ? 1 : -1;
      return 0;  
    });
  }
  
  render() {
    return (
      <div className="group-list-page">
        <SearchExample/>
        <input type="text" 
          value={this.state.search.name} 
          onChange={this.handleNameChange} placeholder="Name" />
        <input type="text" 
          value={this.state.search.abbreviation} 
          onChange={this.handleAbbrevChange} placeholder="Abbreviation" />
        {this.buttonGroups}
        <div className="db-card">
          <div className="legend-title">Basic Information</div>
          <div className="row">
            <div className="column column-one-third">
              <div className="mui-textfield">
                <div className="input">Academic Teaching Initiative</div>
                <label>Name</label>
              </div>
              <div className="row">
                <div className="mui-textfield">
                  <label>Abbreviation</label>
                  <div className="input">ATI</div>
                </div>
                <div className="mui-textfield">
                  <label>ID</label>
                  <div className="input">123</div>
                </div>
              </div>
              <div className="row">
                <div className="mui-textfield">
                  <label>Type</label>
                  <div className="input">Academic</div>
                </div>
              </div>
            </div>
            <div className="column column-two-thirds">
              <div className="mui-textfield">
                <label>Description</label>
                <div className="textarea">
                  MIT Greek InterVarsity is a community seeking transformation as
                  we investigate Jesus Christ alongside our brothers and sisters.
                  We are an affiliate ofInterVarsity Christian Fellowship USA, 
                  specifically for fraternity and sorority members. Our hope is to
                  discover and explore spirituality in the Greek system through a 
                  real relationship with the living God. By focusing on the core 
                  values of the Greek system, brothers from different fraternities
                  and sisters from different sororities can find common ground and
                  grow in community with one another. We pray not just for the 
                  edification of individuals, but also for stronger community in 
                  each chapter house and within the Greek system. In addition to 
                  weekly small groups, prayer, and chapter-specific discussions, 
                  we gather together monthly to meet new people from different 
                  chapters, connect to God, and share a vision of the work God is 
                  doing and will continue to do in the MIT Greek system. Together 
                  we ask who God is and why that matters.
                </div>
              </div>
            </div>
          </div>
          <div className="legend-title">Recognition</div>
          <div className="row">
            <div className="mui-textfield">
              <label>Status</label>
              <div className="input">Active</div>
            </div>
            <div className="mui-textfield">
              <label>Class</label>
              <div className="input">Sponsored</div>
            </div>
            <div className="mui-textfield">
              <label>Funding</label>
              <div className="input">Undergraduate</div>
            </div>
          </div>
          <div className="row">
            <div className="column column-one-half">
              <div className="legend-title">Contact</div>
              <div className="row">
                <div className="mui-textfield">
                  <label>Website</label>
                  <div className="input">
                    <div className="paper-icon-button-0">
                      <i className="icon ion-ios-world-outline"></i>
                    </div>
                    www.hello.com
                    </div>
                </div>
                <div className="mui-textfield">
                  <label>Meeting Times</label>
                  <div className="input">
                    <div className="paper-icon-button-0">
                      <i className="icon ion-ios-clock-outline"></i>
                    </div>
                    No Times Provided
                  </div>
                </div>
              </div>
              
            </div>
            <div className="column column-one-half">
              <div className="legend-title">Member Makeup</div>
              
              <div className="material-album">
                <div className="song-table tight" data-type="album">
                  <div className="header-row">
                    <div className="header-cell">Undergraduate</div>
                    <div className="header-cell">Graduate</div>
                    <div className="header-cell">Community</div>
                    <div className="header-cell">Other</div>
                  </div>
                  <div className="body">
                    <div className="song-row">
                      <div className="row-cell">1</div>
                      <div className="row-cell">1</div>
                      <div className="row-cell">1</div>
                      <div className="row-cell">1</div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <MaterialTable 
          // style="material" 
          groups={this.groups}
          searchState={this.state.search}
          // abbrevSearch = {this.state.search.abbreviation}
          groupsSort={this.state.groupsSort}
          changeSort={this.handleSort}
          buttonsState={this.state.buttons} />
      </div>
    );
  }
}

export default GroupsPage;