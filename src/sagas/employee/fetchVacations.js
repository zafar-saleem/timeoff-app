import { call, put } from 'redux-saga/effects';
import { fetchVacationsService } from '../../services/employee/fetchVacations';

import * as types from '../../actions';

export function* fetchVacations(payload) {
  try {
    const response = yield call(fetchVacationsService, payload);

    yield [
      put({ type: types.FETCH_VACATIONS_SUCCESS, response })
    ];
  } catch (error) {
    yield put({ type: types.FETCH_VACATIONS_ERROR, error });
  }
};