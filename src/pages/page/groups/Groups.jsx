import React from 'react';

import Buttons from './../../../components/buttons/Buttons.jsx';
import OldTable from './../../../components/tables/old-table/OldTable.jsx';
import MaterialTable from './../../../components/tables/material-table/MaterialTable.jsx';
import Form from './../../../components/form/Form.jsx';

import { GROUPS } from './../../../js/groups.js';
import { GROUP_PROPERTIES } from './../../../js/group-properties.js';

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
      groupsSort: 'forward',
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
      {groupsSort: this.state.groupsSort === 'forward' ? 'reverse' : 'forward'}
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
  
  setFilterState(groupId, value) {
    this.setState({
      filters: {
        ...this.state.filters, 
        [groupId]: value
      }
    });
  }
  
  get buttonGroups() {
    return GROUP_PROPERTIES.map((group, i) => (
      <Buttons key={i} buttons={group.choices} groupId={group.id}  
        setButtonGroupState={this.setFilterState} buttonsType="div"
        buttonGroupState={this.state.filters[group.id]}/>
    ));
  }
  
  get groups() {
    const state = this.state.groupsSort === 'forward';
    return GROUPS.sort((a,b) => {
      if (a.name < b.name) return state ? -1 : 1;
      if (a.name > b.name) return state ? 1 : -1;
      return 0;  
    });
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
      changeAbbrevSearch: this.handleAbbrevChange,
      type: this.props.type
    };
  }
  
  get tableProps() {
    return {
      groups: this.groups,
      searchState: this.state.search,
      groupsSort: this.state.groupsSort,
      changeSort: this.handleSort,
      buttonsState: this.state.filters
    };
  }
  
  render() {
    return (
      <div>
        <Form {...this.filterProps}/>
        {this.props.type === "old" ? 
          <span>
            <h2>The Groups</h2>
            <p>{`Found ${GROUPS.length} groups:`}</p>
          </span> :
          null
        }
        {this.props.type === "new" ? 
          <MaterialTable {...this.tableProps}/> :
          <OldTable {...this.tableProps}/>}
      </div>
    );
  }
}

export default GroupsPage;