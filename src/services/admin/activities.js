import { getCookie } from '../../utils/cookies';
import { baseurl } from '../../utils/baseurl';

export const fetchActivitiesService = () => {
  const FETCH_ACTIVITIES_ENDPOINT = baseurl(`dashboard/activities?id=${getCookie('id')}`);

  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    }
  }

  return fetch(FETCH_ACTIVITIES_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    })
    .catch(error => {
      return { error: error };
    })
};