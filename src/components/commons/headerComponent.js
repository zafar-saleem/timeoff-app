import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getCookie } from '../../utils/cookies';

import './header.css';

class HeaderComponent extends Component {

  componentDidMount(){
    document.title = 'TimeOff';
  }

  render() {
    return (
      <div className='header-container'>
        <Link to='/' className='logo'></Link>
        {(getCookie('role') === 'Admin')
        ?
        <ul className='navbar'>
          <li><Link className='navlink active' to='/admin/dashboard'>Dashboard</Link></li>
          <li><Link className='navlink' to='/admin/list'>Employees</Link></li>
          <li><Link className='navlink' to='/admin/new'>Add Employee</Link></li>
        </ul>
        :
        <ul className='navbar'>
          <li><Link className='navlink active' to='/employee/home'>Home</Link></li>
          <li><Link className='navlink' to='/employee/profile'>Profile</Link></li>
        </ul>
        }
        {(getCookie('role') === 'Admin')
        ? <span className='welcome uppercase'>Welcome <Link to='/admin/profile' className='link success'>Admin</Link></span> 
        : <span className='welcome uppercase'>Welcome <Link to='/employee/profile' className='link success'>{getCookie('name')}</Link></span>}
        <Link to='/logout' className='btn danger logout'>Logout</Link>
      </div>
    );
  }
}

export default HeaderComponent;
