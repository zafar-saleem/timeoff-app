import React from 'react';
import { Link } from 'react-router-dom';

const employeeDetailsView = (props) => (
  <div>
    {(props.success) ? <div>{props.message}</div> : null}
    <div><span>Name: </span>{props.employee.name}</div>
    <div><span>Position: </span>{props.employee.position}</div>
    <div><span>Role: </span>{props.employee.role}</div>
    <div><span>Username: </span>{props.employee.username}</div>
    <div><Link to={`/employee/update/${props.employee._id}`}>Edit</Link></div>
    {(props.employee.active !== false) ? 
      <button onClick={props.handleDeactivate}>Deactivate {props.employee.name}</button>
      :
      <button onClick={props.handleDeactivate} disabled>{props.employee.name} is Deactive</button>
    }
  </div>
);

export default employeeDetailsView;
