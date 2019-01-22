import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { registerUserAction } from '../../../actions/authenticationActions';
import RegisterView from './registerView';

class RegisterComponent extends Component {
  state = {
    isSuccess: false,
    message: ''
  }

  onHandleRegistration = (event) => {
    event.preventDefault();

    let name = event.target.name.value;
    let username = event.target.username.value;
    let password = event.target.password.value;

    const data = {
      name, username, password
    };

    this.props.dispatch(registerUserAction(data));
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.response.register.hasOwnProperty('response')) {
      if (nextProps.response.register.response.success !== prevState.isSuccess) {
        return {
          isSuccess: nextProps.response.register.response.success,
          message: nextProps.response.register.response.message
        };
      } else {
        return {
          isSuccess: nextProps.response.register.response.success,
          message: nextProps.response.register.response.message
        };
      }
    } else {
      return null;
    }
  }

  render() {
    if (this.state.isSuccess) {
      return <Redirect to='/login' />;
    }
    
    return (
      <RegisterView handleRegistration={this.onHandleRegistration} message={this.state.message} success={this.state.isSuccess} />
    )
  }
}

const mapStateToProps = (response) => ({
  response
});

export default connect(mapStateToProps)(RegisterComponent);
