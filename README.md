# angular-md-starter

[![Build Status](https://travis-ci.org/mdopieralski/angular-md-starter.svg?branch=master)](https://travis-ci.org/mdopieralski/angular-md-starter)
[![devDependencies Status](https://david-dm.org/mdopieralski/angular-md-starter/dev-status.svg)](https://david-dm.org/mdopieralski/angular-md-starter?type=dev)
[![dependencies Status](https://david-dm.org/mdopieralski/angular-md-starter/status.svg)](https://david-dm.org/mdopieralski/angular-md-starter)

Angular 1.6 starter kit. 
Heavily inspired by [Todd Motto's](https://toddmotto.com/) [angular styleguide](https://github.com/toddmotto/angular-styleguide).

NOTE: Required NodeJS v6.9.4 && NPM v.3.10.10

Based on: 

- [AngularJS 1.6.0](https://code.angularjs.org/1.6.0/docs/api)
- [NPM](https://docs.npmjs.com/)
- [Webpack](http://webpack.github.io/docs/)
- [Karma](https://karma-runner.github.io)
- [Jasmine](https://jasmine.github.io/)
- [Protractor](http://www.protractortest.org/#/)

-------------

### Setup
-------------

Start with installing dependencies.

`npm install`

### Run
-------------
`npm run start:CONFIG_NAME`

Where CONFIG_NAME is one of "/src/app/config/data/*constants.json". 
Currently availbe configurations:

`npm run start:local-tests`

`npm run start:local`

`npm run start:production`

`npm run start:remote-tests`


### Tests
-------------
`npm run test`

`npm run test-e2e`

### Contributing
-------------
We use [commitizen](https://github.com/commitizen/cz-cli/), with [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog).

`npm run commit`

There's jshint hooked in "precommit" npm script.

### Building
-------------------
`npm run build:CONFIG_NAME`
