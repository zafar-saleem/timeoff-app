import React from 'react';
import { Link } from 'react-router-dom';
import { getCookie } from '../../../utils/cookies';

const AdminProfileView = ({ profile }) => (
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
            <th></th><Link className='link success' to={`/admin/update/${getCookie('id')}`}>Edit</Link>
          </tr>
      </tbody>
    </table>
  </div>
);

export default AdminProfileView;