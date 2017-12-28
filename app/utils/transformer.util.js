import result from 'lodash/result';
import filter from 'lodash/filter';
import {MainRoutes} from '../routes/index.routes';
import moment from 'moment';
// GENERAL utility methods
export const wrapObjectInFunction = (obj) => () => obj;

export const wrapMethodInFunction = (method, ...args) => () => method(...args);

export const getCurrentRouteName  = (navigationState) => {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
};

export const getCurrentRouteTitle = (nav) => {
  const currentRouteName = result(nav, 'navigation.state.routeName');
  const routeConfig = MainRoutes[currentRouteName];
  return result(routeConfig, 'screenTitle', currentRouteName);
};





export const getErrorMessage = (response, ifNotPresentMessage) => result(response, 'data.message', ifNotPresentMessage);





export const removeFalsy = (object) => {
  const duplicate = {...object};
  const keys = Object.keys(duplicate);
  keys.forEach((eachKey) => {
    if (!duplicate[eachKey] && !([false, 0].includes(duplicate[eachKey]))) {
      delete duplicate[eachKey];
    }
  });
  return duplicate;
};
