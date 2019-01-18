import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/admin/list">Employees</Link></li>
          <li><Link to="/admin/new">Add</Link></li>
        </ul>
        <Link to="/logout">Logout</Link>
      </div>
    );
  }
}

export default HeaderComponent;
