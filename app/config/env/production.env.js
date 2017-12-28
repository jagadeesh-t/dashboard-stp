const defaults = {
  ENV: 'production',
  MOCKAPI: false,
  URL: 'https://www.production.com/test',
  GA_TRACKER_ID: 'UA-XXXXX',
  GA_TRACKER_INTERVAL: 2,
  fixtures: {}
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
