import React from 'react';

const AddEmployeeView = (props) => (
  <div>
    {(props.success) ? <div>{props.message}</div> : <div>{props.message}</div>}
    <form onSubmit={props.handleAddEmployee}>
      <div>
        <label>Full Name</label>
        <input type="text" name="name" />
      </div>
      <div>
        <label>Position</label>
        <input type="text" name="position" />
      </div>
      <div>
        <label>Username</label>
        <input type="text" name="username" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" />
      </div>
      <div>
        <label>Role</label>
        <select name="role">
          <option>Select</option>
          <option value="Client">Client</option>
          <option value="Admin">Admin</option>
        </select>
      </div>
      <div>
        <button>Save</button>
      </div>
    </form>
  </div>
);

export default AddEmployeeView;
