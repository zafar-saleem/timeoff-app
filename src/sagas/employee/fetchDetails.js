import { call, put } from 'redux-saga/effects';
import { fetchEmployeeDetailsService } from '../../services/employee/details';

import * as types from '../../actions';

export function* fetchEmployeeDetails(payload) {
  try {
    const response = yield call(fetchEmployeeDetailsService, payload);
    yield [
      put({ type: types.FETCH_EMPLOYEE_DETAILS_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.FETCH_EMPLOYEE_DETAILS_ERROR, error });
  }
};