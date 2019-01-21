import React, { Component } from 'react';
import HeaderComponent from '../../commons/headerComponent';
import { connect } from 'react-redux';

import { employeesListAction } from '../../../actions/adminActions';
import EmployeesListView from './employeesListView';
import { getCookie } from '../../../utils/cookies';

class EmplyeesListComponent extends Component {
  constructor(props) {
    super(props);
    const data = {
      id: getCookie('id'),
      access: getCookie('role')
    };

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
