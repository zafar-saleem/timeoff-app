import React, { Component } from 'react';
import HeaderComponent from '../../commons/headerComponent';
import { connect } from 'react-redux';

import { employeesListAction } from '../../../actions/adminActions';
import EmployeesListView from './employeesListView';

class EmplyeesListComponent extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(employeesListAction());
  }

  render() {
    return (
      <div>
        <HeaderComponent />
        <EmployeesListView 
          list={this.props.response.employeesList.response} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  response: state
});

export default connect(mapStateToProps)(EmplyeesListComponent);
