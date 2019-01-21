import React from 'react';

const EmployeesListView = (props) => {
  if (props.list == undefined) {
    return null;
  }

  return (
    <div>
      {props.list.map(li => (
        <table>
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
                {li.name}
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
