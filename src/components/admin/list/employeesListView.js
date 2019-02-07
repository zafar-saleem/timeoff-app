import React from 'react';
import { Link } from 'react-router-dom';

import './employees.css';

const EmployeesListView = (props) => {
  if (props.list === undefined) {
    return null;
  }

  if (!props.list.success && props.list.hasOwnProperty('success')) {
    return <div>{props.list.message}</div>
  }

  return (
    <div className='employees'>
      <input 
        className='employee-search'
        type='text'
        name='search'
        placeholder='Search employee by Username'
        onChange={props.handleOnChange}
      />
      <table>
        <thead>
          <tr>
            <th><a href='#' onClick={props.onSortHandle}>Username</a></th>
            <th><a href='#' onClick={props.onSortHandle} className='padding'>Name</a></th>
            <th><a href='#' onClick={props.onSortHandle} className='padding width'>Position</a></th>
          </tr>
        </thead>
        <tbody>
          {props.list.map(li => (  
            <tr key={li._id}>
              <td>
                <Link className='name' to={`/employee/details/${li._id}`}><b>{li.username}</b></Link>
              </td>
              <td>
                <Link className='name uppercase' to={`/employee/details/${li._id}`}><b>{li.name}</b></Link>
              </td>
              <td className='uppercase'>
                {li.position}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeesListView;
