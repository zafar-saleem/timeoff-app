import React, { Component } from 'react';
import { connect } from 'react-redux';

import { employeeDetailsAction } from '../../../actions/employeesActions';

import HeaderComponent from '../../commons/headerComponent';
import EmployeeDetailsView from './employeeDetailsView';

import { getCookie } from '../../../utils/cookies';

class EmployeeDetailsComponent extends Component {
  constructor(props) {
    super(props);
    const data = {
      employeeID: this.props.match.params.id,
      admin: {
        id: getCookie('id'),
        access: getCookie('role')
      }
    };

    this.props.dispatch(employeeDetailsAction(data));
  }

  render() {
    if (this.props.response.details.response === undefined) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <HeaderComponent />
        <EmployeeDetailsView 
          employee={this.props.response.details.response}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  response: state
});

export default connect(mapStateToProps)(EmployeeDetailsComponent);
