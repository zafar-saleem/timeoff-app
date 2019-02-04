import { getCookie } from '../../utils/cookies';

const baseUrl = 'http://localhost:3000/api/v1/employee';

export const updateEmployeeDetailsService = (request) => {
  const UPDATE_EMPLOYEES_ENDPOINT = `${baseUrl}/details`;

  const parameters = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    },
    body: JSON.stringify(request.details)
  };

  return fetch(UPDATE_EMPLOYEES_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    }).catch(error => {
      return error;
    });
};