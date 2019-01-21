import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { checkCookie } from '../../../utils/cookies';

const LoginView = (props) => (
  <div>
    {(checkCookie() !== null) ? <Redirect to='/admin/dashboard' /> : null}
    <h3>Login Page</h3>
    {(!props.isSuccess) ? <div>{props.message}</div> : null}
    <form onSubmit={props.handleLogin}>
      <div>
        <label>Username</label>
        <input type="text" name="username" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" />
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  </div>
);

export default LoginView;