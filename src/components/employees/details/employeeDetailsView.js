import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../commons/buttons/button';

import './details.css';

const employeeDetailsView = ({ message, employee, success, handleDeactivate }) => (
  <div className='details'>
    {(success) ? <div className='error'>{message}</div> : null}
    <table>
      <tbody>
          <tr>
            <th>Name</th><td className='uppercase'>{employee.name}</td>
          </tr>
          <tr>
            <th>Email</th><td className=''>{employee.email}</td>
          </tr>
          <tr>
            <th>Position</th><td className='uppercase'>{employee.position}</td>
          </tr>
          <tr>
            <th>Role</th><td>{employee.role}</td>
          </tr>
          <tr>
            <th>Username</th><td>{employee.username}</td>
          </tr>
          {(employee.active !== false)
            ? 
            <tr className='edit-link'>
              <th></th><td><Link className='link success uppercase' to={`/employee/update/${employee._id}`}>Edit {employee.name}</Link></td>
            </tr>
            : null
          }
      </tbody>
    </table>
    {(employee.active !== false) ? 
      <Button classes='btn danger btn-deactivate uppercase' onClick={handleDeactivate} buttonLabel={`Deactivate ${employee.name}`} />
      :
      <Button classes='btn danger btn-deactivate uppercase' onClick={handleDeactivate} buttonLabel={`${employee.name} is Deactived`} />
    }
  </div>
);

export default employeeDetailsView;
