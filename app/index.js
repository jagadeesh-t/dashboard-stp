/* global GLOBAL */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {wrapObjectInFunction} from './utils/transformer.util';
import {Provider} from 'react-redux';
import {initStore} from './state/store';
import App from './App.container';
import {setJSExceptionHandler} from 'react-native-exception-handler';
import errorHandler from './utils/errorHandler.util';
import {initializeHTTPInterceptors} from './utils/http.util';

setJSExceptionHandler(errorHandler);

const store = initStore();
initializeHTTPInterceptors(store);


// ===========================================
// ===========================================
// CONFIG FOR MAKING NETWORK REQUEST SHOW UP
// ON DEBUGGER
// ===========================================
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
GLOBAL.FormData = GLOBAL.originalFormData || GLOBAL.FormData;
// ===========================================
const dashboardapp = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);
//
export default dashboardapp;
AppRegistry.registerComponent('dashboardapp', wrapObjectInFunction(dashboardapp));
