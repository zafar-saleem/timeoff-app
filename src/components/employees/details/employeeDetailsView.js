import React from 'react';
import { Link } from 'react-router-dom';

import './details.css';

const employeeDetailsView = ({ message, employee, success, handleDeactivate }) => (
  <div className='details'>
    {(success) ? <div>{message}</div> : null}
    <table>
      <tbody>
          <tr>
            <th>Name</th><td>{employee.name}</td>
          </tr>
          <tr>
            <th>Position</th><td>{employee.position}</td>
          </tr>
          <tr>
            <th>Role</th><td>{employee.role}</td>
          </tr>
          <tr>
            <th>Username</th><td>{employee.username}</td>
          </tr>
          <tr className='edit-link'>
            <th></th><Link className='edit' to={`/employee/update/${employee._id}`}>Edit {employee.name}</Link>
          </tr>
      </tbody>
    </table>
    {(employee.active !== false) ? 
      <button className='btn-deactivate' onClick={handleDeactivate}>Deactivate {employee.name}</button>
      :
      <button className='btn-deactivate' onClick={handleDeactivate} disabled>{employee.name} is Deactived</button>
    }
  </div>
);

export default employeeDetailsView;
