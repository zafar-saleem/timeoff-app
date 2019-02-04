import { getCookie } from '../../utils/cookies';

const baseUrl = 'http://localhost:3000/api/v1/employee';

export const fetchEmployeeDetailsService = (request) => {
  const employeeID = request.details.employeeID;
  
  const FETCH_EMPLOYEES_ENDPOINT = `${baseUrl}/details?employeeID=${employeeID}`;

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
    }).catch(error => {
      return error;
    });
};