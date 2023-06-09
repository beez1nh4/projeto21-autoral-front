import api from './api';

export async function getLinks(token) {
  const response = await api.get('/link', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function save(body, token) {
  const response = await api.post('/link', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function updateLink(body, params, token) {
  const response = await api.put(`/link/${params}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }); 

  return response.data;
}
