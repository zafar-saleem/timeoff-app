import { takeLatest } from 'redux-saga/effects';
import { registerSaga, loginSaga } from './authenticationSaga';
import {
  addEmployeeSaga,
  fetchEmployees,
  fetchEmployeesCount,
  fetchOnlineEmployees,
  fetchActivities
} from './adminSaga';
import { fetchEmployeeDetails } from './employeeSaga';

import * as types from '../actions';


export default function* watchUserAuthentication() {
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.ADD_EMPLOYEE, addEmployeeSaga);
  yield takeLatest(types.FETCH_EMPLOYEES, fetchEmployees);
  yield takeLatest(types.FETCH_EMPLOYEE_DETAILS, fetchEmployeeDetails);
  yield takeLatest(types.FETCH_TOTAL_EMPLOYEES, fetchEmployeesCount);
  yield takeLatest(types.FETCH_ONLINE_EMPLOYEES, fetchOnlineEmployees);
  yield takeLatest(types.FETCH_ACTIVITIES, fetchActivities);
}