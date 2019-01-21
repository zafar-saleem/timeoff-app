import * as types from './';

export const employeeDetailsAction = (details) => {
  return {
    type: types.FETCH_EMPLOYEE_DETAILS,
    details
  }
};