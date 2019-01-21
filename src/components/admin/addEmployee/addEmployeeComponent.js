import React, { Component } from 'react';
import HeaderComponent from '../../commons/headerComponent';
import { connect } from 'react-redux';

import { saveEmployeeAction } from '../../../actions/adminActions';
import AddEmployeeView from './addEmployeeView';
import { getCookie } from '../../../utils/cookies';

class NewEmployeeComponent extends Component {
  state = {
    success: false,
    message: ''
  }

  onHandleAddEmployee = (event) => {
    event.preventDefault();
    
    let name = event.target.name.value;
    let position = event.target.position.value;
    let role = event.target.role.value;
    let username = event.target.username.value;
    let password = event.target.password.value;

    const data = {
      name, role, position, username, password,
      admin: {
        access: getCookie('role'),
        id: getCookie('id')
      }
    };

    this.props.dispatch(saveEmployeeAction(data));
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.response.admin.hasOwnProperty('response')) {
      if (nextProps.response.admin.response.success !== prevState.isSuccess) {
        return {
          isSuccess: nextProps.response.admin.response.success,
          message: nextProps.response.admin.response.message
        };
      } else {
        return {
          isSuccess: nextProps.response.admin.response.success,
          message: nextProps.response.admin.response.message
        };
      }
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <HeaderComponent />
        <AddEmployeeView
          handleAddEmployee={this.onHandleAddEmployee}
          message={this.state.message}
          success={this.state.success} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  response: state
});

export default connect(mapStateToProps)(NewEmployeeComponent);
