'use strict';

/**
 *
 * @name: RootConfig
 *
 */

function RootConfig($stateProvider, $urlRouterProvider) {

  'ngInject';

  $stateProvider
    .state('root', {
      abstract: true,
      url: '/',
      template: '<root-component></root-component>',
    });

  $urlRouterProvider.otherwise('/');
}

export default RootConfig;
