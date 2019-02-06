import React from 'react';

import './add.css';

const AddEmployeeView = (props) => (
  <div className='new'>
    <div className={(props.success) ? 'message success' : 'message error'}>{props.message}</div>
    <form onSubmit={props.handleAddEmployee}>
      <div>
        <label>Full Name</label>
        <input type="text" name="name" className="fields" />
      </div>
      <div>
        <label>Position</label>
        <input type="text" name="position" className="fields" />
      </div>
      <div>
        <label>Username</label>
        <input type="text" name="username" className="fields" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" className="fields" />
      </div>
      <div>
        <label>Role</label>
        <select className="dropdown" name="role">
          <option>Select</option>
          <option value="Client">Client</option>
          <option value="Admin">Admin</option>
        </select>
      </div>
      <div>
        <span className='required'>All fields are required.</span>
        <button className="btn success">Save</button>
      </div>
    </form>
  </div>
);

export default AddEmployeeView;
