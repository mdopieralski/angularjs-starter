'use strict';

/**
 *
 * @name: angularMdStarterApp.components
 *
 */

import RootModule from './root/_root.module';
import HomeModule from './home/_home.module';
import PageModule from './page/_page.module';

export default angular.module('angularMdStarterApp.components', [
    RootModule,
    HomeModule,
    PageModule,
  ])
  .name;
