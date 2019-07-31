import { call, put } from 'redux-saga/effects';
import { fetchOnlineEmployeesService } from '../../services/admin/online';

import * as types from '../../actions';

export function* fetchOnlineEmployees() {
  try {
    const response = yield call(fetchOnlineEmployeesService);
    
    yield [
      put({ type: types.FETCH_ONLINE_EMPLOYEES_SUCCESS, response })
    ];

  } catch(error) {
    yield put({ type: types.FETCH_ONLINE_EMPLOYEES_ERROR, error });
  }
}