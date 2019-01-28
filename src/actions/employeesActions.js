import * as types from './';

export const employeeDetailsAction = (details) => {
  return {
    type: types.FETCH_EMPLOYEE_DETAILS,
    details
  }
};

export const employeeUpdateAction = (details) => {
  return {
    type: types.UPDATE_EMPLOYEE_DETAILS,
    details
  }
};

export const setVacationActions = (range) => {
  return {
    type: types.SET_VACATIONS,
    range
  }
}