import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
  
});

const requestHandler = request => {
  let token = localStorage.getItem('token');
  if (token) {
    request.headers.Authorization = 'Bearer ' + token;
  }
  return request;
};

const responseHandler = response => {
  if (response.status === 401) {
    window.location = '/';
  }
  return response;
};

const errorHandler = error => {
  return Promise.reject(error);
};

api.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

api.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default api;