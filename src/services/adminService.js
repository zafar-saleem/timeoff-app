import { getCookie } from '../utils/cookies';

export const addEmployeeService = (request) => {
  const EMPLOYEE_API_ENDPOINT = 'http://localhost:3000/api/v1/admin/new';

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    },
    body: JSON.stringify(request)
  };

  return fetch(EMPLOYEE_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};

export const fetchEmployeesService = () => {
  const FETCH_EMPLOYEES_ENDPOINT = 'http://localhost:3000/api/v1/admin/list';

  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    }
  };

  return fetch(FETCH_EMPLOYEES_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
}