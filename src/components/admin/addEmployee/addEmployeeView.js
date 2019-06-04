import React from 'react';

import './add.css';

const AddEmployeeView = (props) => (
  <div className='new'>
    <div className={(props.success) ? 'message success' : 'message error'}>{props.message}</div>
    <form onSubmit={props.handleAddEmployee}>
      <div>
        <label>Full Name</label>
        <input type="text" name="name" className="fields" value={props.name} onChange={props.handleChange} />
      </div>
      <div>
        <label>Position</label>
        <input type="text" name="position" className="fields" value={props.position} onChange={props.handleChange} />
      </div>
      <div>
        <label>Username</label>
        <input type="text" name="username" className="fields" value={props.username} onChange={props.handleChange} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" className="fields" value={props.password} onChange={props.handleChange} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" className="fields" value={props.email} onChange={props.handleChange} />
      </div>
      <div>
        <label>Role</label>
        <select className="dropdown" name="role"  value={props.role} onChange={props.handleChange}>
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
