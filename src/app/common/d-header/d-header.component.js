'use strict';

/**
 *
 * @name: HomeComponent
 *
 */

import HeaderTemplate from './d-header.index.html';

export default {
  template: HeaderTemplate,
  controller: class HeaderComponent {
    constructor() {

      'ngInject';
    }
  }
};
