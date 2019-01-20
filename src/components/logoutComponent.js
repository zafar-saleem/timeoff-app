import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getCookie, deleteCookies, setCookie } from '../utils/cookies';

class LogoutComponent extends Component {
  constructor() {
    super();
    setCookie('token', getCookie('token'), 0);
    setCookie('role', getCookie('role'), 0);
  }

  render() {
    if (getCookie('token') == null || getCookie('token') == '') {
      return <Redirect to='/' />;
    }
    
    return <Redirect to='/admin/dashboard' />
  }
}

export default LogoutComponent;
