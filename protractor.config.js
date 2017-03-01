let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://localhost:3000/',
  specs: [
    'src/e2e-tests/**/*.js',
  ],
  exclude: [],
  framework: 'jasmine2',
  allScriptsTimeout: 110000,
  jasmineNodeOpts: {
    showTiming: true,
    showColors: true,
    isVerbose: false,
    includeStackTrace: false,
    defaultTimeoutInterval: 400000
  },
  directConnect: true,
  capabilities: {
    browserName: 'firefox',
    version: '',
    platform: 'ANY'
  },
  onPrepare: function() {
    browser.ignoreSynchronization = true;

    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));
  }
};
