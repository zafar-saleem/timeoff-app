import { call, put } from 'redux-saga/effects';
import { addEmployeeService } from '../../services/adminService';

import * as types from '../../actions';

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