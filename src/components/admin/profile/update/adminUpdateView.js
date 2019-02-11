import React from 'react';
import { getCookie } from '../../../../utils/cookies';

import './update.css';

const AdminUpdateView = ({profile, handleUpdateAdmin, success, message}) => (
  <div className='container profile-update'>
    <div className={(success) ? 'message success' : 'message error'}>{message}</div>
    <form onSubmit={handleUpdateAdmin}>
      <div>
        <label>Username</label>
        <input type="text" name="username" defaultValue={profile.username} className="fields" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="username" defaultValue={profile.email} className="fields" />
      </div>
      <div>
        <label>Role</label>
        {(getCookie('role') === 'Admin')
          ?
          <select name="role" className="dropdown" defaultValue={profile.role}>
            <option>Select</option>
            <option value="Client">Client</option>
            <option value="Admin">Admin</option>
          </select>
          :
          <input type="text" name="role" readOnly value={profile.role} className="fields" />
        }
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" className="fields" placeholder="Enter old or new password" />
      </div>
      <div>
        <button className='btn success'>Update</button>
      </div>
    </form>
  </div>
);

export default AdminUpdateView;