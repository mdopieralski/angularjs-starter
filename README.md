# angular-md-starter

[![Build Status](https://magnum.travis-ci.com/mdopieralski/angular-md-starter.svg?token=SAUE9RQMSLpnyzDMyaPP&branch=development)](https://magnum.travis-ci.com/mdopieralski/angular-md-starter)

Angular 1.6 starter kit. 
Heavily inspired by [Todd Motto's](https://toddmotto.com/) [angular styleguide](https://github.com/toddmotto/angular-styleguide).

NOTE: Required NodeJS version 4.0.0 && NPM v. 2.14.2

Based on: 

- [AngularJS 1.6.0](https://code.angularjs.org/1.6.0/docs/api)
- [NPM](https://docs.npmjs.com/)
- [Webpack](http://webpack.github.io/docs/)
- [Karma](https://karma-runner.github.io)
- [Jasmine](https://jasmine.github.io/)
- [Protractor](http://www.protractortest.org/#/)

-------------

### Install
-------------
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
`npm run start:tests-remote`

### Tests
-------------
`npm run test`

`npm run test-e2e`

### Contributing
-------------
We use [commitizen](https://github.com/commitizen/cz-cli/), with [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog).

`npm run commit`

There's jshint hooked in "precommit" npm script. After commit, please leave a couple words in [releases](https://github.com/Airnauts/nowness-frontend/releases) if it's needed !

### Building
-------------------
`npm run build`
