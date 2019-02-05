/* eslint-disable import/no-extraneous-dependencies */
const defaultSettings = require('@open-wc/testing-karma/default-settings.js');
const merge = require('webpack-merge');

module.exports = config => {
  config.set(
    merge(defaultSettings(config), {
      files: [
        // allows running single tests with the --grep flag
        config.grep ? config.grep : 'test/**/*.test.js',
      ],

      // your custom config
    }),
  );
  config.client = {
    captureConsole: true
  };
  // config.logLevel = 'DEBUG';
  config.reporters = ['mocha'];
  // config.singleRun = false;
  // console.log(config);

  return config;
};