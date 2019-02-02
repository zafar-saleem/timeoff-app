import React from 'react';
import { Link } from 'react-router-dom';

import './employees.css';

const EmployeesListView = (props) => {
  if (props.list == undefined) {
    return null;
  }

  if (!props.list.success && props.list.hasOwnProperty('success')) {
    return <div>{props.list.message}</div>
  }

  return (
    <div className='employees'>
      <table>
        <thead>
          <tr>
            <th className='tb-check'></th>
            <th>Name</th>
            <th>Position</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
        {props.list.map(li => (  
          <tr key={li._id}>
            <td className='tb-check'><input type='checkbox' /></td>
            <td>
              <Link className='name' to={`/employee/details/${li._id}`}>{li.name}</Link>
            </td>
            <td>
              {li.position}
            </td>
            <td>
              {li.username}
            </td>
            <td>
              <Link to='' className='deactivate'>Deactivate</Link>
            </td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  );
};

export default EmployeesListView;
