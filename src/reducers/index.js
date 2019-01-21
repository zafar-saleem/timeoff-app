import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer';
import admin from './adminReducer';
import employeesList from './employeesListReducer';
import employeeDetails from './employeeDetailsReducer';

const rootReducer = combineReducers({
  register, login, admin, employeesList, employeeDetails
});

export default rootReducer;