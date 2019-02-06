import { getCookie } from '../../utils/cookies';

const baseUrl = 'http://localhost:3000/api/v1/admin/update';

export const updateAdminProfileService = (request) => {
  const parameters = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    },
    body: JSON.stringify(request.data)
  };

  return fetch(baseUrl, parameters)
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