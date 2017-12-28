const defaults = {
  ENV: 'dev',
  MOCKAPI: true,
  URL: 'https://test-dev.com/test',
  GA_TRACKER_ID: 'UA-XXXXX',
  GA_TRACKER_INTERVAL: 2,
  fixtures: require('./fixtures.config')
};

const setEnv = (envKey, value) => {
  defaults[envKey] = value;
  return defaults;
};

module.exports = {
  setEnv,
  get ENV () {
    return defaults.ENV;
  },
  get MOCKAPI () {
    return defaults.MOCKAPI;
  },
  
};
