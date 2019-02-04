import { call, put } from 'redux-saga/effects';
import { updateEmployeeDetailsService } from '../../services/employee/update';

import * as types from '../../actions';

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