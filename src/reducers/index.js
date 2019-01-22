import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer';
import admin from './admin/adminReducer';
import employeesList from './admin/employeesListReducer';
import employeeDetails from './admin/employeeDetailsReducer';
import count from './admin/countReducer';
import online from './admin/onlineReducer';

const rootReducer = combineReducers({
  register,
  login,
  admin,
  employeesList,
  employeeDetails,
  count,
  online
});

export default rootReducer;