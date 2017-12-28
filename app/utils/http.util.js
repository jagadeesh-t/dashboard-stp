import {SERVER_URL, endpoints} from '../config/api.config';
import axios from 'axios';
import {getStatusValidatorInterceptor, mockInterceptor} from './interceptors.util';

const baseConfig = {
  baseURL: SERVER_URL,
  headers: {'X-Requested-With': 'XMLHttpRequest'},
  params: {},
  timeout: 60000, // 60 seconds
  withCredentials: true,
  validateStatus: () => true,
  cancelToken: null,
  // onDownloadProgress: () => {}, // Left this as a reference incase we need it
};

// To create a cancel Token
// const CancelToken = axios.CancelToken;
// const source = CancelToken.source();
// http.get('/test', {cancelToken: source.token});
// for http.post('/test',body, {cancelToken: source.token});
// source.cancel('Operation canceled by the user.');

export const get = (endpoint, options = {}) => {
  const config = {
    ...baseConfig,
    ...options,
    method: 'get',
    endpoint,
    url: endpoints[endpoint]
  };
  return axios(config);
};

export const post = (endpoint, data = {}, options = {}) => {
  console.log("logging url ");
  console.log(endpoints[endpoint])
  console.log(baseConfig)
  console.log(SERVER_URL);
  const config = {
    ...baseConfig,
    ...options,
    method: 'post',
    endpoint,
    url: endpoints[endpoint],
    data
  };
  return axios(config);
};

export const put = (endpoint, data = {}, options = {}) => {
  const config = {
    ...baseConfig,
    ...options,
    method: 'put',
    endpoint,
    url: endpoints[endpoint],
    data
  };
  return axios(config);
};

export const del = (endpoint,query={},options = {}) => {
  const config = {
    ...baseConfig,
    ...options,
    method: 'delete',
    endpoint,
    params: query,
    url: endpoints[endpoint]
  };
  return axios(config);
};


// Registering interceptors
export const initializeHTTPInterceptors = (store) => {
  // REQUEST INTERCEPTORS
  axios.interceptors.request.use(mockInterceptor, Promise.reject);
  // RESPONSE INTERCEPTORS
  axios.interceptors.response.use(getStatusValidatorInterceptor(store), Promise.reject);
};
