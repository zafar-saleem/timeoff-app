import { getCookie } from '../utils/cookies';

const baseUrl = 'http://localhost:3000/api/v1/employee/details';

export const fetchEmployeeDetailsService = (request) => {
  const employeeID = request.details.employeeID;
  const id = request.details.admin.id;
  const access = request.details.admin.access;

  const FETCH_EMPLOYEES_ENDPOINT = `${baseUrl}?employeeID=${employeeID}&id=${id}&access=${access}`;

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
};

export const updateEmployeeDetailsService = (request) => {
  const FETCH_EMPLOYEES_ENDPOINT = 'http://localhost:3000/api/v1/employee/details';

  const parameters = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    },
    body: JSON.stringify(request.details)
  };

  return fetch(FETCH_EMPLOYEES_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    }).catch(error => {
      return error;
    });
};