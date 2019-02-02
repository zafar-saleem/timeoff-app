import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { checkCookie } from '../../../utils/cookies';

import './login.css';

const LoginView = (props) => (
  <div className='login-container'>
    <a href='/' className='logo-login'></a>
    {(checkCookie() !== null) ? <Redirect to='/admin/dashboard' /> : null}
    {(!props.isSuccess) ? <div className='error'>{props.message}</div> : null}
    <form onSubmit={props.handleLogin}>
      <div>
        <input type="text" name="username" placeholder="Username" />
      </div>
      <div>
        <input type="password" name="password" placeholder="Password" />
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  </div>
);

export default LoginView;