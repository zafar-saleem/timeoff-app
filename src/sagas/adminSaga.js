import { call, put } from 'redux-saga/effects';
import { addEmployeeService, fetchEmployeesService } from '../services/adminService';

import * as types from '../actions';

export function* addEmployeeSaga(payload) {
  try {
    const response = yield call(addEmployeeService, payload.employee);

    yield [
      put({ type: types.ADD_EMPLOYEE_SUCCESS, response })
    ];
  } catch (error) {
    yield put({ type: types.ADD_EMPLOYEE_SUCCESS, error });
  }
}

export function* fetchEmployees() {
  try {
    const response = yield call(fetchEmployeesService);
    
    yield [
      put({ type: types.FETCH_EMPLOYEES_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.FETCH_EMPLOYEES_SUCCESS, error })
  }
}