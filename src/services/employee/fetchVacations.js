import { getCookie } from '../../utils/cookies';

const baseUrl = 'http://localhost:3000/api/v1/employee';

export const fetchVacationsService = (request) => {
  const FETCH_VACATION_ENDPOINT = `${baseUrl}/vacation?id=${request.id.id}`;

  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    }
  };

  return fetch(FETCH_VACATION_ENDPOINT, parameters)
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