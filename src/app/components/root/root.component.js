'use strict';

/**
 *
 * @name: RootComponent
 *
 */

import RootTemplate from './root.index.html';

export default {
  template: RootTemplate,
  controller: class RootComponent {
    constructor() {

      'ngInject';

      console.log('contstructor');
    }
  }
};
