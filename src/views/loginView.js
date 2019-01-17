import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const LoginView = (props) => (
  <div>
    <h3>Login Page</h3>
    {(!props.isSuccess) ? <div>{props.message}</div> : null}
    <form onSubmit={props.handleLogin}>
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

export default LoginView;