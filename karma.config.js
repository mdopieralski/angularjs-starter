'use strict';

module.exports = function(config) {

  config.set({

    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'node_modules//angular/angular.js',
      'node_modules//angular-mocks/angular-mocks.js',

      'dist/assets/bundle.js',
      'src/app/**/*.spec.js'
    ],
    exclude: [],
    reporters: ['spec'],
    port: 8080,
    colors: true,
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DISABLE,
    autoWatch: true,
    // browsers: ['Chrome'],
    browsers: ['PhantomJS'],
    // browsers: ['Firefox'],
    preprocessors: {
      'src/app/**/*.spec.js': ['babel']
    },
    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
      }
    },
    singleRun: true,
    plugins: [
      require('karma-jasmine'),
      require('karma-coverage'),
      require('karma-chrome-launcher'),
      require('karma-firefox-launcher'),
      require('karma-phantomjs-launcher'),
      require('karma-spec-reporter'),
      require('karma-babel-preprocessor')
    ]
  });
};
