import { getCookie } from '../../utils/cookies';

const baseUrl = 'http://localhost:3000/api/v1/employee';

export const deleteVacationService = (request) => {
  const FETCH_VACATION_ENDPOINT = `${baseUrl}/vacation`;

  const parameters = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    },
    body: JSON.stringify(request.id)
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
