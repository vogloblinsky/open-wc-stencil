/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const bsSettings = require('@open-wc/testing-karma-bs/bs-settings.js');
const karmaEs5Config = require('./karma.es5.config.js');

module.exports = config => {
  config.set(merge(bsSettings(config), karmaEs5Config(config), {
    browserStack: {
      project: 'open-wc-stencil',
    },
    browsers: [
      'bs_win10_chrome_latest',
      'bs_win10_firefox_latest',
      'bs_win10_edge_latest',
      'bs_osxmojave_safari_latest',
      'bs_win10_ie_11', {
        base: 'BrowserStack',
        browser: 'Safari',
        browser_version: '11.1',
        os: 'OS X',
        os_version: 'High Sierra',
      }
    ]
  }));
  return config;
};