import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class LoginView extends Component {
  render() {
    return (
        <div>
          <h3>Login Page</h3>
          {(!this.props.isSuccess) ? <div>{this.props.message}</div> : null}
          <form onSubmit={this.props.handleLogin}>
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

export default connect()(LoginView);