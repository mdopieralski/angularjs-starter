'use strict';

/**
 *
 * @name: angularMdStarterApp.page
 *
 */

import PageConfig from './page.config';
import PageComponent from './page.component';

export default angular
  .module('angularMdStarterApp.page', [])
  .config(PageConfig)
  .component('pageComponent', PageComponent)
  .name;
