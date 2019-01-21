import React from 'react';
import { Link } from 'react-router-dom';

const EmployeesListView = (props) => {
  if (props.list == undefined) {
    return null;
  }

  return (
    <div>
      {props.list.map(li => (
        <table key={li._id}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link to={`/employee/details/${li._id}`}>{li.name}</Link>
              </td>
              <td>
                {li.position}
              </td>
              <td>
                {li.username}
              </td>
            </tr>
          </tbody>
        </table>        
      ))}
    </div>
  );
};

export default EmployeesListView;
