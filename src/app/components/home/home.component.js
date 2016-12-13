'use strict';

/**
 *
 * @name: HomeComponent
 *
 */

import HomeTemplate from './home.index.html';

export default {
  template: HomeTemplate,
  controller: class HomeComponent {
    constructor() {

      'ngInject';
    }
  }
};
