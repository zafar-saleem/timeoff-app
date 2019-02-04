import { call, put } from 'redux-saga/effects';
import { deleteVacationService } from '../../services/employeesService';

import * as types from '../../actions';

export function* deleteVacation(payload) {
  try {
    const response = yield call(deleteVacationService, payload);

    yield [
      put({ type: types.DELETE_VACATION_SUCCESS, response })
    ];
  } catch (error) {
    yield put({ type: types.DELETE_VACATION_SUCCESS, error });
  }
};