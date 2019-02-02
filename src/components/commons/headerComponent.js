import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getCookie } from '../../utils/cookies';

import './header.css';

class HeaderComponent extends Component {
  render() {
    return (
      <div className='header-container'>
        <a href='/' className='logo'></a>
        {(getCookie('role') === 'Admin')
        ?
        <ul className='navbar'>
          <li><Link className='link active' to="/admin/dashboard">Dashboard</Link></li>
          <li><Link className='link' to="/admin/list">Employees</Link></li>
          <li><Link className='link' to="/admin/new">Add Employee</Link></li>
        </ul>
        :
        <ul className='navbar'>
          <li><Link className='link active' to="/employee/home">Home</Link></li>
          <li><Link className='link' to="/employee/profile">Profile</Link></li>
        </ul>
        }
        {(getCookie('role') === 'Admin')
        ? <span className='welcome'>Welcome Admin</span> 
        : <span className='welcome'>Welcome Employee</span>}
        <Link to="/logout" className='logout'>Logout</Link>
      </div>
    );
  }
}

export default HeaderComponent;
