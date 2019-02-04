import { getCookie } from '../../utils/cookies';

const baseUrl = 'http://localhost:3000/api/v1/employee';

export const setVacationsService = (request) => {
  const SET_VACATION_ENDPOINT = `${baseUrl}/vacation`;

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    },
    body: JSON.stringify(request)
  };

  return fetch(SET_VACATION_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    })
    .catch(error => {
      return error;
    });
};