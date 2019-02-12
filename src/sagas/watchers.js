import { takeLatest } from 'redux-saga/effects';
import {
  registerSaga,
  loginSaga,
  logoutSaga,
  forgotPasswordSaga
} from './authenticationSaga';

import { search } from './admin/search';
import { addEmployeeSaga } from './admin/addEmployee';
import { fetchEmployees } from './admin/fetchEmployees';
import { fetchEmployeesCount } from './admin/count';
import { fetchOnlineEmployees } from './admin/online';
import { fetchActivities } from './admin/activities';
import { deactivate } from './admin/deactivate';
import { profile } from './admin/profile';
import { updateProfile } from './admin/updateProfile';

import { fetchEmployeeDetails } from './employee/fetchDetails';
import { updateEmployeeDetails } from './employee/updateDetails';
import { setVacations } from './employee/setVacations';
import { fetchVacations } from './employee/fetchVacations';
import { deleteVacation } from './employee/deleteVacations';

import * as types from '../actions';


export default function* watchUserAuthentication() {
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.FORGOT_PASSWORD, forgotPasswordSaga);
  yield takeLatest(types.LOGOUT_USER, logoutSaga);
  yield takeLatest(types.ADD_EMPLOYEE, addEmployeeSaga);
  yield takeLatest(types.FETCH_EMPLOYEES, fetchEmployees);
  yield takeLatest(types.FETCH_EMPLOYEE_DETAILS, fetchEmployeeDetails);
  yield takeLatest(types.UPDATE_EMPLOYEE_DETAILS, updateEmployeeDetails);
  yield takeLatest(types.FETCH_TOTAL_EMPLOYEES, fetchEmployeesCount);
  yield takeLatest(types.FETCH_ONLINE_EMPLOYEES, fetchOnlineEmployees);
  yield takeLatest(types.FETCH_ACTIVITIES, fetchActivities);
  yield takeLatest(types.SET_VACATIONS, setVacations);
  yield takeLatest(types.FETCH_VACATIONS, fetchVacations);
  yield takeLatest(types.DELETE_VACATION, deleteVacation);
  yield takeLatest(types.DEACTIVATE_EMPLOYEE, deactivate);
  yield takeLatest(types.SEARCH_EMPLOYEE, search);
  yield takeLatest(types.FETCH_ADMIN_PROFILE, profile);
  yield takeLatest(types.UPDATE_ADMIN_PROFILE, updateProfile);
}