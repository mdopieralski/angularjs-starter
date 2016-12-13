var config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['src/test/e2e/**/*.js'],
  baseUrl: 'http://localhost:3000', //default test port with Yeoman
  capabilities: {
    browserName: 'firefox',
    version: '',
    platform: 'ANY'
  },
  suites: {
    main: 'src/test/e2e/main/*.test.js',
    search: 'src/test/e2e/search/*.test.js',
    category: 'src/test/e2e/category/*.test.js',
    all: 'src/test/e2e/**/*.test.js'
  },
  onPrepare: function() {
    browser.manage().window().setSize(1920, 1080);
  }
};


if (process.env.REMOTE_TESTS) {
  delete config.seleniumAddress;
}

exports.config = config;