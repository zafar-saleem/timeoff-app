import React from 'react';
import { Link } from 'react-router-dom';

const EmployeesListView = (props) => {
  if (props.list == undefined) {
    return null;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Username</th>
          </tr>
        </thead>
      {props.list.map(li => (  
        <tbody key={li._id}>
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
      ))}
      </table>
    </div>
  );
};

export default EmployeesListView;
