'use strict';

/**
 *
 * @name: PageConfig
 *
 */

function PageConfig($stateProvider) {

  'ngInject';

  $stateProvider
    .state('root.page', {
      url: '',
      template: '<page-component></page-component>'
    });

}

export default PageConfig;
