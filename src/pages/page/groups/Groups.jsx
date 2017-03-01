import React from 'react';

import Buttons from './../../../components/buttons/Buttons.jsx';
import OldTable from './../../../components/tables/old-table/OldTable.jsx';
import MaterialTable from './../../../components/tables/material-table/MaterialTable.jsx';
import Card from './../../../components/card/Card.jsx';
import Form from './../../../components/form/Form.jsx';

import { GROUPS } from './../../../js/groups.js';
import { GROUP_PROPERTIES } from './../../../js/group-properties.js';

const PROPS = { 
  id: 2276,
  name: "Lean On Me @ MIT",
  abbreviation: 'LOM',
  category: 'Social',
  groupStatus: 'Active',
  groupClass: 'Unfunded',
  groupFunding: 'undergraduate',
  website: 'http://lean0n.me/',
  desc: 'The purpose of the Lean On Me @ MIT Student Group is to facilitate communication among peer populations within MIT by way of technology-enabled, volunteer-based support networks, in order to enhance general well-being of the MIT community, particularly students. We envision a world in which everybody has someone to lean on, so we build a pervasive environment of open conversation and peer support. We strive to operate effectively and efficiently to accomplish this mission and to teach ourselves and others effective and sustainable group practices. We hold each other and the MIT community accountable to these ends, and we empower all students to participate in creating our vision and achieving our mission.',
  time: null,
  size: {
    undergraduate: 30,
    graduate: 3,
    mitCommunity: 5,
    other:  5
  }
};

class GroupsPage extends React.Component {

  constructor() {
    super();
    this.state = {
      filters : {
        category: 'All',
        groupClass: 'All',
        groupStatus: 'All',
        groupFunding: 'All',
      },
      groupsSort: 'front',
      search: {
        name: '',
        abbreviation: ''
      },
      focused: {
        name: false,
        abbreviation: false
      }
    };
    
    this.setFilterState = this.setFilterState.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAbbrevChange = this.handleAbbrevChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }
  
  handleSort() {
    this.setState(
      {groupsSort: this.state.groupsSort === 'front' ? 'reverse' : 'front'}
    );
  }
  
  handleBlur(type) {
    this.setState({ focused: {...this.state.focused, [type]: false} });
  }
  
  handleFocus(type) {
    this.setState({ focused: {...this.state.focused, [type]: true} });
  }
  
  handleNameChange(e) {
    this.setState({search: {...this.state.search, name: e.target.value}});
  }
  
  handleAbbrevChange(e) {
    this.setState({search: {...this.state.search, abbreviation: e.target.value}});
  }
  
  get buttonGroups() {
    return GROUP_PROPERTIES.map((group, i) => (
      <Buttons key={i} buttons={group.choices} groupId={group.id}  
        setButtonGroupState={this.setFilterState} buttonsType="div"
        buttonGroupState={this.state.filters[group.id]}/>
    ));
  }
  
  get filterProps() {
    return {
      filterStates: this.state.filters,
      setFilterState: this.setFilterState,
      filters: GROUP_PROPERTIES,
      searchValues: this.state.search,
      focusedValues: this.state.focused,
      handleFocus: this.handleFocus,
      handleBlur: this.handleBlur,
      changeNameSearch: this.handleNameChange,
      changeAbbrevSearch: this.handleAbbrevChange
    };
  }
  
  get groups() {
    const state = this.state.groupsSort === 'front';
    return GROUPS.sort((a,b) => {
      if (a.name < b.name) return state ? -1 : 1;
      if (a.name > b.name) return state ? 1 : -1;
      return 0;  
    });
  }
  
  setFilterState(groupId, filter) {
    this.setState({
      filters: {
        ...this.state.filters, 
        [groupId]: filter
      }
    });
  }

  render() {
    return (
      <div className="group-list-page">
        <Form {...this.filterProps}/>
        {/*<div className={`mdl-textfield ${this.state.focused.name ? 'isFocused' : ''}`}>
          <label className="mdl-textfield__label">Name</label>
          <input type="text" 
            value={this.state.search.name} 
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChange={this.handleNameChange} />
        </div>*/}
        <input type="text" 
          value={this.state.search.abbreviation} 
          onChange={this.handleAbbrevChange} placeholder="Abbreviation" />
        {this.buttonGroups}
        <MaterialTable 
          // style="material" 
          groups={this.groups}
          searchState={this.state.search}
          // abbrevSearch = {this.state.search.abbreviation}
          groupsSort={this.state.groupsSort}
          changeSort={this.handleSort}
          buttonsState={this.state.filters} />
        <Card group={PROPS}/>
      </div>
    );
  }
}

export default GroupsPage;