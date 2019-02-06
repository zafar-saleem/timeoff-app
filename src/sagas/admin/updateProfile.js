import { call, put } from 'redux-saga/effects';
import { updateAdminProfileService } from '../../services/admin/updateProfile';

import * as types from '../../actions';

export function* updateProfile(payload) {
  try {
    const response = yield call(updateAdminProfileService, payload);

    yield [
      put({ type: types.UPDATE_ADMIN_PROFILE_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.UPDATE_ADMIN_PROFILE_SUCCESS, error });
  }
};