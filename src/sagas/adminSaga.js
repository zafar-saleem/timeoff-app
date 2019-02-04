import { call, put } from 'redux-saga/effects';
import {
  addEmployeeService,
  fetchEmployeesService,
  fetchEmployeesCountService,
  fetchOnlineEmployeesService,
  fetchActivitiesService,
  deactivateService,
  searchService
} from '../services/adminService';

import * as types from '../actions';

export function* addEmployeeSaga(payload) {
  try {
    const response = yield call(addEmployeeService, payload.employee);

    yield [
      put({ type: types.ADD_EMPLOYEE_SUCCESS, response })
    ];
  } catch (error) {
    yield put({ type: types.ADD_EMPLOYEE_SUCCESS, error });
  }
}

export function* fetchEmployees(payload) {
  try {
    const response = yield call(fetchEmployeesService, payload);
    
    yield [
      put({ type: types.FETCH_EMPLOYEES_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.FETCH_EMPLOYEES_SUCCESS, error })
  }
}

export function* fetchEmployeesCount() {
  try {
    const response = yield call(fetchEmployeesCountService);

    yield [
      put({ type: types.FETCH_TOTAL_EMPLOYEES_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.FETCH_TOTAL_EMPLOYEES_SUCCESS, error });
  }
}

export function* fetchOnlineEmployees() {
  try {
    const response = yield call(fetchOnlineEmployeesService);
    
    yield [
      put({ type: types.FETCH_ONLINE_EMPLOYEES_SUCCESS, response })
    ];

  } catch(error) {
    yield put({ type: types.FETCH_ONLINE_EMPLOYEES_SUCCESS, error });
  }
}

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

export function* deactivate(payload) {
  try {
    const response = yield call(deactivateService, payload);

    yield [
      put({ type: types.DEACTIVATE_EMPLOYEE_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.DEACTIVATE_EMPLOYEE_SUCCESS, error });
  }
};

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
