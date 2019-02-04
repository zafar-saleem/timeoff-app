import { call, put } from 'redux-saga/effects';
import { fetchActivitiesService } from '../../services/admin/activities';

import * as types from '../../actions';

export function* fetchActivities() {
  try {
    const response = yield call(fetchActivitiesService);

    yield [
      put({ type: types.FETCH_ACTIVITIES_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.FETCH_ACTIVITIES_SUCCESS, error });
  }
};