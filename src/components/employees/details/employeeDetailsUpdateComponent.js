import React, { Component } from 'react';
import { connect } from 'react-redux';

import { employeeDetailsAction } from '../../../actions/employeesActions';

import HeaderComponent from '../../commons/headerComponent';
import EmployeeDetailsUpdateView from './employeeDetailsUpdateView';

class EmployeeDetailsUpdateComponent extends Component {
  constructor(props) {
    super(props);

    this.props.dispatch(employeeDetailsAction({ employeeID: this.props.match.params.id }));
  }

  onHandleUpdateEmployee = (event) => {
    console.log(event);
  }

  render() {
    return (
      <div>
        <HeaderComponent />
        <EmployeeDetailsUpdateView
          handleUpdateEmployee={this.onHandleUpdateEmployee}
          employee={this.props.response.employeeDetails.response}
         />
       </div>
    );
  }
}

const mapStateToProps = (state) => ({
  response: state
});

export default connect(mapStateToProps)(EmployeeDetailsUpdateComponent);
