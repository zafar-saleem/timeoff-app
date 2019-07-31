import { call, put } from 'redux-saga/effects';
import { fetchAdminProfileService } from '../../services/admin/profile';

import * as types from '../../actions';

export function* profile(payload) {
  try {
    const response = yield call(fetchAdminProfileService, payload);

    yield [
      put({ type: types.FETCH_ADMIN_PROFILE_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.FETCH_ADMIN_PROFILE_ERROR, error });
  }
};