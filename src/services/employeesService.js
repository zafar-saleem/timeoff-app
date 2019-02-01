import { getCookie } from '../utils/cookies';

const baseUrl = 'http://localhost:3000/api/v1/employee';

export const fetchEmployeeDetailsService = (request) => {
  const employeeID = request.details.employeeID;
  // const id = request.details.admin.id;
  // const access = request.details.admin.access;

  // console.log(id);

  const FETCH_EMPLOYEES_ENDPOINT = `${baseUrl}/details?employeeID=${employeeID}`;

  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    }
  }

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

export const updateEmployeeDetailsService = (request) => {
  const FETCH_EMPLOYEES_ENDPOINT = `${baseUrl}/details`;

  const parameters = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    },
    body: JSON.stringify(request.details)
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

export const setVacationsService = (request) => {
  const SET_VACATION_ENDPOINT = `${baseUrl}/vacation`;

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    },
    body: JSON.stringify(request)
  };

  return fetch(SET_VACATION_ENDPOINT, parameters)
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

export const fetchVacationsService = (request) => {
  const FETCH_VACATION_ENDPOINT = `${baseUrl}/vacation?id=${request.id.id}`;

  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    }
  };

  return fetch(FETCH_VACATION_ENDPOINT, parameters)
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

export const deleteVacationService = (request) => {
  const FETCH_VACATION_ENDPOINT = `${baseUrl}/vacation`;

  const parameters = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    },
    body: JSON.stringify(request.id)
  };

  return fetch(FETCH_VACATION_ENDPOINT, parameters)
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
