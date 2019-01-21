import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCookie } from '../../../utils/cookies';
import { employeeDetailsAction } from '../../../actions/employeesActions';

import HeaderComponent from '../../commons/headerComponent';
import EmployeeDetailsView from './employeeDetailsView';

class EmployeeDetailsComponent extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(employeeDetailsAction({ employeeID: this.props.match.params.id }));
  }

  render() {
    if (this.props.response.employeeDetails.response === undefined) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <HeaderComponent />
        <EmployeeDetailsView 
          employee={this.props.response.employeeDetails.response}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  response: state
});

export default connect(mapStateToProps)(EmployeeDetailsComponent);
