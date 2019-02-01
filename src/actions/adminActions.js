import * as types from './';

export const saveEmployeeAction = (employee) => {
  return {
    type: types.ADD_EMPLOYEE,
    employee
  }
};

export const employeesListAction = (data) => {
  return {
    type: types.FETCH_EMPLOYEES,
    data
  }
};

export const employeeDeactivateAction = (id) => {
  return {
    type: types.DEACTIVATE_EMPLOYEE,
    id
  }
};