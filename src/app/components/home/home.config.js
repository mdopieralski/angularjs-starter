'use strict';

/**
 *
 * @name: HomeConfig
 *
 */

function HomeConfig($stateProvider) {

  'ngInject';

  $stateProvider
    .state('root.home', {
      url: '',
      template: '<home-component></home-component>'
    });

}

export default HomeConfig;
