import React from 'react';
import { getCookie } from '../../../utils/cookies';

const EmployeeDetailsUpdateView = (props) => (
  <div className='update'>
    <form onSubmit={props.handleUpdateEmployee}>
      <div className={(!props.success) ? 'message error' : 'message success'}>{props.message}</div>
      <div>
        <label>Full Name</label>
        <input type="text" name="name" defaultValue={props.employee.name} className="fields uppercase" />
      </div>
      <div>
        <label>Position</label>
        <input type="text" name="position" defaultValue={props.employee.position} className="fields uppercase" />
      </div>
      <div>
        <label>Username</label>
        <input type="text" name="username" defaultValue={props.employee.username} className="fields" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" className="fields" placeholder="Enter old or new password (Optional)" />
      </div>
      <div>
        <label>Role</label>
        {(getCookie('role') === 'Admin')
          ?
          <select name="role" className="dropdown" defaultValue={props.employee.role}>
            <option>Select</option>
            <option value="Client">Client</option>
            <option value="Admin">Admin</option>
          </select>
          :
          <input type="text" name="role" readOnly value={props.employee.role} className="fields" />
        }
      </div>
      <div>
        <button className='btn success'>Update</button>
      </div>
    </form>
  </div>
);

export default EmployeeDetailsUpdateView;
