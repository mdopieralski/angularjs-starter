'use strict';

/**
 *
 * @name: angularMdStarterApp.config
 *
 */

function AppConfig(
  $compileProvider,
  $locationProvider,
  APP_CONSTANTS) {

  'ngInject';

  $compileProvider.debugInfoEnabled(APP_CONSTANTS.debugInfoState);
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  $locationProvider.hashPrefix('!');
}

export default AppConfig;
