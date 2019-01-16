import React, { Component } from 'react';
import { instanceOf } from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { setCookie, getCookie, checkCookie } from '../utils/cookies';
import { loginUserAction } from '../actions/authenticationActions';

class LoginPage extends Component {

  onHandleLogin = (event) => {
    event.preventDefault();

    let email = event.target.email.value;
    let password = event.target.password.value;

    const data = {
      email, password
    };

    this.props.dispatch(loginUserAction(data));
  }

  render() {
    let props = this.props.response;
    let isSuccess, message;

    if (props.login.hasOwnProperty('response')) {
      isSuccess = props.login.response.success;
      message = props.login.response.message;
      
      if (isSuccess) {
        setCookie('token', props.login.response.token);
        setCookie('role', props.login.response.role);

        // console.log(getCookie('token'));
      }
    }

    if (isSuccess) {
      return <Redirect to='/dashboard' />;
    }

    return (
      <div>
        <h3>Login Page</h3>
        {(!isSuccess) ? <div>{message}</div> : null}
        <form onSubmit={this.onHandleLogin}>
          <div>
            <label>Email</label>
            <input type="email" name="email" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" />
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
        Don't have account? <Link to="register">Register here</Link>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({response});

export default connect(mapStateToProps)(LoginPage);