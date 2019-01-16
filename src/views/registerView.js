import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class RegisterView extends Component {
  render() {
    return (
      <div>
        <h3>RegisterPage</h3>
        {(!this.props.success) ? <div>{this.props.message}</div> : null}
        <form onSubmit={this.props.handleRegistration}>
          <div>
            <label>Name</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" />
          </div>
          <div>
            <button>Register</button>
          </div>
        </form>
        Already have account? <Link to='login'>Login here</Link>
      </div>
    );
  }
}

export default connect()(RegisterView);
