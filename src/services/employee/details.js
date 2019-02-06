import { getCookie } from '../../utils/cookies';
import { baseurl } from '../../utils/baseurl';

export const fetchEmployeeDetailsService = (request) => {
  const employeeID = request.details.employeeID;
  
  const FETCH_PROFILE = baseurl(`employee/details?employeeID=${employeeID}`);

  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    }
  }

  return fetch(FETCH_PROFILE, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    }).catch(error => {
      return error;
    });
};