import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  employeeDetailsAction
} from '../../../actions/employeesActions';

import {
  employeeDeactivateAction
} from '../../../actions/adminActions';

import HeaderComponent from '../../commons/headerComponent';
import EmployeeDetailsView from './employeeDetailsView';

import { getCookie } from '../../../utils/cookies';

class EmployeeDetailsComponent extends Component {
  state = {
    isSuccess: false,
    message: ''
  }

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

  onHandleDeactivate = (event) => {
    const data = {
      admin: {
        access: getCookie('role'),
        id: getCookie('id')
      },
      id: this.props.response.details.response._id
    };

    this.props.dispatch(employeeDeactivateAction(data));
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.response.deactivate.hasOwnProperty('response')) {
      if (nextProps.response.deactivate.response.success !== prevState.isSuccess) {
        return {
          isSuccess: nextProps.response.deactivate.response.success,
          message: nextProps.response.deactivate.response.message
        };
      } else {
        return {
          isSuccess: nextProps.response.deactivate.response.success,
          message: nextProps.response.deactivate.response.message
        };
      }
    } else {
      return null;
    }
  }

  render() {
    if (this.props.response.details.response === undefined) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <HeaderComponent />
        <EmployeeDetailsView 
          success={this.state.isSuccess}
          message={this.state.message}
          handleDeactivate={this.onHandleDeactivate.bind(this)}
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
