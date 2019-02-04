import { getCookie } from '../../utils/cookies';

export const fetchEmployeesCountService = () => {
  const FETCH_EMPLOYEES_COUNT_ENDPOINT = `http://localhost:3000/api/v1/dashboard/count?id=${getCookie('id')}`;

  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    }
  };

  return fetch(FETCH_EMPLOYEES_COUNT_ENDPOINT, parameters)
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