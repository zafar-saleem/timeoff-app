import { call, put } from 'redux-saga/effects';
import { fetchEmployeesService } from '../../services/admin/fetchEmployees';

import * as types from '../../actions';

export function* fetchEmployees(payload) {
  try {
    const response = yield call(fetchEmployeesService, payload);
    
    yield [
      put({ type: types.FETCH_EMPLOYEES_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.FETCH_EMPLOYEES_ERROR, error })
  }
}