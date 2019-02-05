import { getCookie } from '../../utils/cookies';

const baseUrl = 'http://localhost:3000/api/v1/admin/profile';

export const fetchAdminProfileService = (request) => {
  const FETCH_PROFILE_ENDPOINT = `${baseUrl}?id=${request.data.id}&access=${request.data.access}`;

  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    }
  };

  return fetch(FETCH_PROFILE_ENDPOINT, parameters)
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