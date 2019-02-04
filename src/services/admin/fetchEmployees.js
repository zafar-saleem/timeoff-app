import { getCookie } from '../../utils/cookies';

export const fetchEmployeesService = (request) => {
  let id = request.data.id;
  let access = request.data.access;

  const FETCH_EMPLOYEES_ENDPOINT = `http://localhost:3000/api/v1/admin/list?id=${id}&access=${access}`;

  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    }
  };

  return fetch(FETCH_EMPLOYEES_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    }).catch(error => {
      return error;
    });
};