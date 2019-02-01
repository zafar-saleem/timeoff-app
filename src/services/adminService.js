import { getCookie } from '../utils/cookies';

const baseUrl = 'http://localhost:3000/api/v1/admin';

export const addEmployeeService = (request) => {
  const EMPLOYEE_API_ENDPOINT = 'http://localhost:3000/api/v1/admin/new';

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    },
    body: JSON.stringify(request)
  };

  return fetch(EMPLOYEE_API_ENDPOINT, parameters)
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

export const deactivateService = (request) => {
  const DEACTIVATE_ENDPOINT = `${baseUrl}/deactivate`;

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    },
    body: JSON.stringify(request.id)
  };

  return fetch(DEACTIVATE_ENDPOINT, parameters)
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