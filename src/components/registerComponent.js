import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { registerUserAction } from '../actions/authenticationActions';
import RegisterView from '../views/registerView';

class RegisterComponent extends Component {
  isSuccess;
  message;

  onHandleRegistration = (event) => {
    event.preventDefault();

    let name = event.target.name.value;
    let email = event.target.email.value;
    let password = event.target.password.value;

    const data = {
      name, email, password
    };

    this.props.dispatch(registerUserAction(data));
  }

  setRegistrationProperties = () => {
    if (this.props.response.register.hasOwnProperty('response')) {
      this.isSuccess = this.props.response.register.response.success;
      this.message = this.props.response.register.response.message;

      this.props.response.register.response.success = false;
      this.props.response.register.response.message = null;
    }
  }

  render() {
    this.setRegistrationProperties();

    if (this.isSuccess) {
      return <Redirect to='/login' />;
    }
    
    return (
      <RegisterView handleRegistration={this.onHandleRegistration} message={this.message} success={this.isSuccess} />
    )
  }
}

const mapStateToProps = (response) => ({
  response
});

export default connect(mapStateToProps)(RegisterComponent);
