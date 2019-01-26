import { call, put } from 'redux-saga/effects';
import { fetchEmployeeDetailsService, updateEmployeeDetailsService } from '../services/employeesService';

import * as types from '../actions';

export function* fetchEmployeeDetails(payload) {
  try {
    const response = yield call(fetchEmployeeDetailsService, payload);

    yield [
      put({ type: types.FETCH_EMPLOYEE_DETAILS_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.FETCH_EMPLOYEE_DETAILS_SUCCESS, error });
  }
};

export function* updateEmployeeDetails(payload) {
  try {
    const response = yield call(updateEmployeeDetailsService, payload);

    yield [
      put({ type: types.UPDATE_EMPLOYEE_DETAILS_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.UPDATE_EMPLOYEE_DETAILS_SUCCESS, error });
  }
};