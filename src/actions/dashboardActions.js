import * as types from './';

export const countEmployeeActions = () => {
  return {
    type: types.FETCH_TOTAL_EMPLOYEES
  }
};

export const onlineEmployeesAction = () => {
  return {
    type: types.FETCH_ONLINE_EMPLOYEES
  }
}