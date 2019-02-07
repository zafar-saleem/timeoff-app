import React from 'react';
import { Link } from 'react-router-dom';

const RegisterView = (props) => (
  <div>
    <h3>Register Page</h3>
    {(!props.success) ? <div>{props.message}</div> : null}
    <form onSubmit={props.handleRegistration}>
      <div>
        <label>Name</label>
        <input type="text" name="name" />
      </div>
      <div>
        <label>Username</label>
        <input type="text" name="username" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" />
      </div>
      <div>
        <button>Register</button>
      </div>
    </form>
    Already have account? <Link to="login">Login here</Link>
  </div>
);

export default RegisterView;
