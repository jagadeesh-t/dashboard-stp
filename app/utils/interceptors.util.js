import {mockResponses} from '../config/api.config';
import env from '../config/env.config';
import result from 'lodash/result';

// Interceptor that checks the status of the response
export const getStatusValidatorInterceptor = (/* store*/) => (response) => {
  const {status} = response;
  if (status >= 200 && status < 300) {
    return response;
  }
  if (status === 401) {
    console.log('logout');
  }
  throw response;
};

// Interceptor that sets mock response
export const mockInterceptor = (config) => {
  if (env.MOCKAPI) {
    console.log('SETTING MOCK for endpoint', config.endpoint); // eslint-disable-line no-console
    config.adapter = mockAdapter;
  }
  return config;
};

const mockAdapter = (config) => new Promise((resolve) => {
  const mockData = result(mockResponses, config.endpoint, {});
  const response = {
    data: mockData.response,
    status: 200,
    statusText: 'OK - Mocked request',
    headers: {mock: true},
    config: config,
  };
  setTimeout(() => resolve(response), 5);
});
