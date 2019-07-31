import { call, put } from 'redux-saga/effects';
import { deactivateService } from '../../services/admin/deactivate';

import * as types from '../../actions';

export function* deactivate(payload) {
  try {
    const response = yield call(deactivateService, payload);

    yield [
      put({ type: types.DEACTIVATE_EMPLOYEE_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.DEACTIVATE_EMPLOYEE_ERROR, error });
  }
};