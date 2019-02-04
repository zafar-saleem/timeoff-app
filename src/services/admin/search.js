import { getCookie } from '../../utils/cookies';

const baseUrl = 'http://localhost:3000/api/v1/admin';

export const searchService = (request) => {
  let search = request.search;

  const SEARCH_ENDPOINT = `${baseUrl}/search`;

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    },
    body: JSON.stringify(request.search)
  };

  return fetch(SEARCH_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    })
    .catch(error => {
      return { error: error };
    });
};