import { call, put } from 'redux-saga/effects';
import { fetchEmployeesCountService } from '../../services/admin/count';

import * as types from '../../actions';

export function* fetchEmployeesCount() {
  try {
    const response = yield call(fetchEmployeesCountService);

    yield [
      put({ type: types.FETCH_TOTAL_EMPLOYEES_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.FETCH_TOTAL_EMPLOYEES_ERROR, error });
  }
}