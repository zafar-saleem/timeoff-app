import { call, put } from 'redux-saga/effects';
import { searchService } from '../../services/adminService';

import * as types from '../../actions';

export function* search(payload) {
  try {
    const response = yield call(searchService, payload);

    yield [
      put({ type: types.SEARCH_EMPLOYEE_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.SEARCH_EMPLOYEE_SUCCESS, error });
  }
};
