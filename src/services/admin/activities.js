import { getCookie } from '../../utils/cookies';

export const fetchActivitiesService = () => {
  const FETCH_ACTIVITIES_ENDPOINT = `http://localhost:3000/api/v1/dashboard/activities?id=${getCookie('id')}`;

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