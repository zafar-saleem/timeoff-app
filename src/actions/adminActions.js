import * as types from './';

export const saveEmployeeAction = (employee) => {
  return {
    type: types.ADD_EMPLOYEE,
    employee
  }
};