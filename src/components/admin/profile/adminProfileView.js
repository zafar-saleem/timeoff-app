import React from 'react';
import { Link, Route } from 'react-router-dom';
import { getCookie } from '../../../utils/cookies';

import AdminUpdateComponent from './update/adminUpdateComponent';

const AdminProfileView = ({ profile, match }) => (
  <div className='container'>
    <table className='table'>
      <tbody>
        <tr>
          <th>Role</th><td>{profile.role}</td>
        </tr>
        <tr>
          <th>Username</th><td>{profile.username}</td>
        </tr>
        <tr>
          <th></th><td><Link className='link success uppercase' to={`/profile/update/${getCookie('id')}`}>Edit</Link></td>
        </tr>
      </tbody>
    </table>
    
  </div>
);

export default AdminProfileView;