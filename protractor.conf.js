'use strict';

var config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['src/e2e-tests/**/*.js'],
  baseUrl: 'http://localhost:3000', //default test port with Yeoman
  capabilities: {
    browserName: 'firefox',
    version: '',
    platform: 'ANY'
  },
  suites: {
    root: 'src/e2e-tests/root/*.test.js',
    all: 'src/e2e-tests/**/*.test.js'
  },
  onPrepare: function() {

    browser.manage().window().setSize(1920, 1080);
  }
};


if (process.env.REMOTE_TESTS) {
  delete config.seleniumAddress;
}

exports.config = config;
