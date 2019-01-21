import { getCookie } from '../utils/cookies';

export const fetchEmployeeDetailsService = (request) => {
  const FETCH_EMPLOYEES_ENDPOINT = 'http://localhost:3000/api/v1/employee/details?id=' + request.details.employeeID;

  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    }
  }

  return fetch(FETCH_EMPLOYEES_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
}