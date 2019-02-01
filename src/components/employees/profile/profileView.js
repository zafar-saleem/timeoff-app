import React from 'react';
import { Link } from 'react-router-dom';

import { getCookie } from '../../../utils/cookies';

const ProfileView = (props) => (
  <div>
    <ul>
      <li>Name: {props.employee.name}</li>
      <li>Position: {props.employee.position}</li>
      <li>Role: {props.employee.role}</li>
      <li>Username: {props.employee.username}</li>
    </ul>
    <Link to={`/employee/update/${getCookie('id')}`}>Edit</Link>
  </div>
);

export default ProfileView;