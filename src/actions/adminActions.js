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

export const searchEmployeeAction = (search) => {
  return {
    type: types.SEARCH_EMPLOYEE,
    search
  }
};

export const adminProfileAction = (data) => {
  return {
    type: types.FETCH_ADMIN_PROFILE,
    data
  }
};

export const adminProfileUpdateAction = (data) => {
  return {
    type: types.UPDATE_ADMIN_PROFILE,
    data
  }
};