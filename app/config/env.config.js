const defaults = {
  ENV: 'dev',
  MOCKAPI: false,
  URL: 'https://dashboard-stp.herokuapp.com',
  GA_TRACKER_ID: 'UA-XXXXX',
  GA_TRACKER_INTERVAL: 2,
};

const setEnv = (envKey, value) => {
  defaults[envKey] = value;
  return defaults;
};
module.exports = {
  setEnv,
  URL : 'https://dashboard-stp.herokuapp.com',
  //URL : 'http://localhost:1337',
  get ENV () {
    return defaults.ENV;
  },
  get MOCKAPI () {
    return defaults.MOCKAPI;
  },
 
};
