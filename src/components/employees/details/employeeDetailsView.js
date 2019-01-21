import React from 'react';

const employeeDetailsView = (props) => (
  <div>
    <div>{props.employee.name}</div>
    <div>{props.employee.position}</div>
    <div>{props.employee.role}</div>
    <div>{props.employee.username}</div>
  </div>
);

export default employeeDetailsView;
