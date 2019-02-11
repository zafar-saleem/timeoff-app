import React from 'react';
import { Link } from 'react-router-dom';
import { getCookie } from '../../../utils/cookies';

import './profile.css';

const AdminProfileView = ({ profile, match }) => (
  <div className='container profile'>
    <table className='table'>
      <tbody>
        <tr>
          <th>Role</th><td>{profile.role}</td>
        </tr>
        <tr>
          <th>Username</th><td>{profile.username}</td>
        </tr>
        <tr>
          <th>Email</th><td>{profile.email}</td>
        </tr>
        <tr>
          <th></th><td><Link className='link success uppercase' to={`/profile/update/${getCookie('id')}`}>Edit</Link></td>
        </tr>
      </tbody>
    </table>
    
  </div>
);

export default AdminProfileView;