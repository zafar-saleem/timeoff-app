import React from 'react';

const EmployeeDetailsUpdateView = (props) => (
  <div className='update'>
    <form onSubmit={props.handleUpdateEmployee}>
      <div>{(!props.isSuccess) ? <div>{props.message}</div> : null}</div>
      <div>
        <label>Full Name</label>
        <input type="text" name="name" defaultValue={props.employee.name} />
      </div>
      <div>
        <label>Position</label>
        <input type="text" name="position" defaultValue={props.employee.position} />
      </div>
      <div>
        <label>Username</label>
        <input type="text" name="username" defaultValue={props.employee.username} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" />
      </div>
      <div>
        <label>Role</label>
        {(props.employee.role === 'Admin')
          ?
          <select name="role" defaultValue={props.employee.role}>
            <option>Select</option>
            <option value="Client">Client</option>
            <option value="Admin">Admin</option>
          </select>
          :
          <input type="text" name="role" readOnly value={props.employee.role} />
        }
      </div>
      <div>
        <button>Update</button>
      </div>
    </form>
  </div>
);

export default EmployeeDetailsUpdateView;
