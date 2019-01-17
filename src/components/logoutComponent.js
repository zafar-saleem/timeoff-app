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
    return (
      <div>
        <p>Logging you out...</p>
        {(getCookie('token') == null) ? <Redirect to='/' /> : <Redirect to='dashboard' />}
      </div>
    );
  }
}

export default LogoutComponent;
