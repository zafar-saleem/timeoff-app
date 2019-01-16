import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class LogoutComponent extends Component {
  logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');

    if (localStorage.getItem('token')) {
      console.log(true);
      return true;
    }

    console.log(false);
    return false;
  }

  constructor() {
    super();
    localStorage.removeItem('token');
    localStorage.removeItem('role'); 
  }

  render() {
    console.log(localStorage.getItem('token'));
    return (
      <div>
        <p>Logging you out...</p>
        {(localStorage.getItem('token') == null) ? browserHistory.push('/login') : browserHistory.push('/dashboard')}
      </div>
    );
  }
}

export default LogoutComponent;
