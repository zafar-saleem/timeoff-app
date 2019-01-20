import { takeLatest } from 'redux-saga/effects';
import { registerSaga, loginSaga } from './authenticationSaga';
import { addEmployeeSaga, fetchEmployees } from './adminSaga';

import * as types from '../actions';


export default function* watchUserAuthentication() {
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.ADD_EMPLOYEE, addEmployeeSaga);
  yield takeLatest(types.FETCH_EMPLOYEES, fetchEmployees);
}