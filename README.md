# angularjs-starter

[![Build Status](https://travis-ci.org/mdopieralski/angularjs-starter.svg?branch=master)](https://travis-ci.org/mdopieralski/angularjs-starter)
[![devDependencies Status](https://david-dm.org/mdopieralski/angularjs-starter/dev-status.svg)](https://david-dm.org/mdopieralski/angularjs-starter?type=dev)
[![dependencies Status](https://david-dm.org/mdopieralski/angularjs-starter/status.svg)](https://david-dm.org/mdopieralski/angularjs-starter)

Based on: 

- [AngularJS 1.6.2](https://code.angularjs.org/1.6.2/docs/api)
- [NPM](https://docs.npmjs.com/)
- [Webpack](http://webpack.github.io/docs/)
- [Karma](https://karma-runner.github.io)
- [Jasmine](https://jasmine.github.io/)
- [Protractor](http://www.protractortest.org/#/)


## Requirements
* node `^6.9.4`
* npm `^3.10.10`

## Gettings started

#### Install dependencies

`npm install`

#### Run project

`npm start`

#### All scripts

| Task                       | Description                                                          |
|----------------------------|----------------------------------------------------------------------|
| `prebuild`                 | Clear dist directory                                                 |
| `build`                    | Build app with webpack and local app config.                         |
| `build:production`         | Build app with webpack and production app config.                    |
| `postbuild`                | Copy assets into dist directory.                                     |
|                            |                                                                      |
| `start`                    | Start webpack-dev-server with webpack-dashboard and local app config.|
| `start:production`         | Start with production app config.                                    |
| `webpack-dashboard`        | Runs webpack-dashboard.                                              |
| `webpack-dev-server`       | Runs webpack-dev-server                                              |
|                            |                                                                      |
| `test`                     | Runs karma unit tests.                                               |
| `e2e`                      | Runs protractor end to end tests.                                    |
|                            |                                                                      |
| `jshint`                   | Lint app/server/test files                                           |
| `precommit`                | Lint before commit.                                                  |
| `commit`                   | Commit with commitizen                                               |
|                            |                                                                      |
