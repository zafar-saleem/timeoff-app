import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getCookie } from '../../utils/cookies';

class HeaderComponent extends Component {
  render() {
    return (
      <div>
        {(getCookie('role') === 'Admin')
        ?
        <ul>
          <li><Link to="/admin/list">Employees</Link></li>
          <li><Link to="/admin/new">Add</Link></li>
          <li><Link to="/admin/dashboard">Dashboard</Link></li>
        </ul>
        :
        <ul>
          <li><Link to="/employee/home">Home</Link></li>
          <li><Link to="/employee/profile">Profile</Link></li>
        </ul>
        }
        <Link to="/logout">Logout</Link>
      </div>
    );
  }
}

export default HeaderComponent;
