import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { setCookie } from '../utils/cookies';
import { loginUserAction } from '../actions/authenticationActions';
import LoginView from '../views/loginView';

class LoginPage extends Component {

  properties;
  isSuccess;
  message;

  onHandleLogin = (event) => {
    event.preventDefault();

    let email = event.target.email.value;
    let password = event.target.password.value;

    const data = {
      email, password
    };

    this.props.dispatch(loginUserAction(data));
  }

  setLoginProperties = () => {
    if (this.props.response.login.hasOwnProperty('response')) {
      if (this.props.response.login.response.success) {
        this.isSuccess = this.props.response.login.response.success;

        setCookie('token', this.props.response.login.response.token);
        setCookie('role', this.props.response.login.response.role);
      } else {
        this.message = this.props.response.login.response.message;
      }
    }
  }

  render() {
    this.setLoginProperties();

    if (this.isSuccess) {
      return <Redirect to='/dashboard' />;
    }

    return (
      <LoginView handleLogin={this.onHandleLogin} success={this.isSuccess} message={this.message} />
    );
  }
}

const mapStateToProps = (response) => ({response});

export default connect(mapStateToProps)(LoginPage);