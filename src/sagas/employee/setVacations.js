import { call, put } from 'redux-saga/effects';
import { setVacationsService } from '../../services/employeesService';

import * as types from '../../actions';

export function* setVacations(payload) {
  try {
    const response = yield call(setVacationsService, payload.range);

    yield [
      put({ type: types.SET_VACATIONS_SUCCESS, response })
    ];
  } catch (error) {
    yield put({ type: types.SET_VACATIONS_SUCCESS, error });
  }
};