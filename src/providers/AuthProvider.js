const baseURL = process.env.REACT_APP_API;

export const authProvider = {
  login: async (params) => {
    let response = await fetch(`${baseURL}/login`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=password&username=${params.username}&password=${params.password}`,
    });
    console.log(response);
    response = await response.json();
    localStorage.removeItem('token');
    if (response.access_token) {
      localStorage.setItem('token', response.access_token);
      return Promise.resolve();
    } else {
      return Promise.reject();
    }
  },
  logout: async (params) => {
    const token = localStorage.getItem('token');
    await fetch(`${baseURL}/logout`, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    localStorage.removeItem('token');
    return Promise.resolve();
  },
  checkAuth: () => {
    const token = localStorage.getItem('token');
    if (token) {
      return Promise.resolve();
    }
    return Promise.reject();
  },
  getPermissions: async (params) => {
    // console.log(params);

    // return fetch(`${baseURL}${resource}`);
  },
  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      return Promise.reject();
    }
    return Promise.resolve();
  },
};
