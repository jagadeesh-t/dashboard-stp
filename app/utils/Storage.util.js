import {AsyncStorage} from 'react-native';

const storageKeys = {
  LANGUAGE: 'language'
};

const set = (key, value) => AsyncStorage.setItem(storageKeys[key], JSON.stringify(value));

const get = (key) => AsyncStorage.getItem(storageKeys[key]).then(JSON.parse);

const remove = (key) => AsyncStorage.removeItem(storageKeys[key]);

module.exports = {
  get,
  set,
  remove
};
