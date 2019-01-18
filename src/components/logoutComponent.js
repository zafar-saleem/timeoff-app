import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getCookie, deleteCookies, setCookie } from '../utils/cookies';

class LogoutComponent extends Component {
  constructor() {
    super();
    console.log(getCookie('token'));
    setCookie('token', getCookie('token'), 0);
    setCookie('role', getCookie('role'), 0);
    console.log(typeof getCookie('token'));
    console.log(getCookie('token'));
  }

  render() {
    if (getCookie('token') == null || getCookie('token') == '') {
      console.log('TRUE');
      return <Redirect to='/' />;
    }
    
    console.log('FASLE');
    return <Redirect to='/admin/dashboard' />
  }
}

export default LogoutComponent;
