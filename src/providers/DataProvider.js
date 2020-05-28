const baseURL = process.env.REACT_APP_API;

export const dataProvider = {
  getOne: async (resource, params) => {
    const token = localStorage.getItem('token');
    let response = await fetch(
      `${baseURL}/${resource}/${params && params.id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    response = await response.json();
    return {
      data: response,
      total: response ? response.length : 0,
    };
  },
  getList: async (resource, params) => {
    console.log(baseURL, '<--');
    const token = localStorage.getItem('token');
    let response = await fetch(`${baseURL}/${resource}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    response = await response.json();
    const filteredResp = [];
    if (params.filter && params.filter.unique) {
      const done_type = [];
      response[resource].forEach((resp) => {
        if (!done_type.includes(resp.user_type)) {
          done_type.push(resp.user_type);
          filteredResp.push(resp);
        }
      });
      response = filteredResp;
    }
    return {
      data: response[resource],
      total: response ? response.total_count : 0,
    };
  },
  getMany: async (resource, params) => {
    const token = localStorage.getItem('token');
    let response = await fetch(`${baseURL}/${resource}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    response = await response.json();
    response = response[resource].filter((item) =>
      params.ids.includes(item.id)
    );
    return {
      data: response,
      total: response ? response.total_count : 0,
    };
  },
  getManyReference: async (resource, params) => {
    console.log(resource, params, '===');
  },
  create: async (resource, params) => {
    const token = localStorage.getItem('token');
    let response = await fetch(`${baseURL}/${resource}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(params.data),
    });

    response = await response.json();
    if (response.id) {
      return {
        data: response,
      };
    }
    return Promise.reject();
  },
  update: async (resource, params) => {
    const token = localStorage.getItem('token');
    let response = await fetch(`${baseURL}/${resource}/${params.data.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(params.data),
    });
    response = await response.json();
    if (response.id) {
      return {
        data: response,
      };
    }
    return Promise.reject();
  },
  delete: async (resource, params) => {
    const token = localStorage.getItem('token');
    let response = await fetch(`${baseURL}/${resource}/${params.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    response = await response.json();
    console.log(response);
    if (response.deleted) {
      return {
        data: response,
      };
    }
    return Promise.reject();
  },
  deleteMany: async (resource, params) => {
    const token = localStorage.getItem('token');
    let success = true;
    params.ids.forEach(async (id) => {
      let response = await fetch(`${baseURL}/${resource}/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      response = await response.json();
      if (!response.deleted) {
        success = false;
      }
    });
    if (success) {
      return {
        data: true,
      };
    }
    return Promise.reject();
  },
};
