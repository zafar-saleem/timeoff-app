import { getCookie } from '../../utils/cookies';
import { baseurl } from '../../utils/baseurl';

export const fetchEmployeesCountService = () => {
  const FETCH_COUNT_ENDPOINT = baseurl(`dashboard/count?id=${getCookie("id")}`);

  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('timeoff-token')
    }
  };

  return fetch(FETCH_COUNT_ENDPOINT, parameters)
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