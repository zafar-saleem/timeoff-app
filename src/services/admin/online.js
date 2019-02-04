import { getCookie } from '../../utils/cookies';

export const fetchOnlineEmployeesService = () => {
  const FETCH_ONLINE_EMPLOYEES_ENDPOINT = `http://localhost:3000/api/v1/dashboard/online?id=${getCookie('id')}`;

  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    }
  };

  return fetch(FETCH_ONLINE_EMPLOYEES_ENDPOINT, parameters)
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