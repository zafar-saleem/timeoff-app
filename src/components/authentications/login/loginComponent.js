import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { setCookie } from '../../../utils/cookies';
import { loginUserAction } from '../../../actions/authenticationActions';
import LoginView from './loginView';

class LoginComponent extends Component {
  state = {
    isSuccess: false,
    message: ''
  };

  componentDidMount(){
    document.title = 'TimeOff';
  }

  onHandleLogin = (event) => {
    event.preventDefault();

    let username = event.target.username.value;
    let password = event.target.password.value;

    const data = {
      username, password
    };

    this.props.dispatch(loginUserAction(data));
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.response.login.hasOwnProperty('response')) {
      if (nextProps.response.login.response.success !== prevState.isSuccess) {
        setCookie('timeoff-token', nextProps.response.login.response.token, 1);
        setCookie('role', nextProps.response.login.response.role, 1);
        setCookie('id', nextProps.response.login.response.id, 1);
        setCookie('name', nextProps.response.login.response.name, 1);

        return {
          isSuccess: nextProps.response.login.response.success,
          message: nextProps.response.login.response.message
        };
      } else {
        return {
          isSuccess: nextProps.response.login.response.success,
          message: nextProps.response.login.response.message
        };
      }
    } else {
      return null;
    }
  }

  render() {
    if (this.state.isSuccess) {
      return <Redirect to='/admin/dashboard' />;
    }

    return (
      <LoginView
        handleLogin={this.onHandleLogin}
        success={this.state.isSuccess}
        message={this.state.message} />
    );
  }
}

const mapStateToProps = (response) => ({response});

export default connect(mapStateToProps)(LoginComponent);