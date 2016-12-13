'use strict';

/**
 *
 * @name: angularMdStarterApp.common
 *
 */

import HeaderModule from './d-header/_d-header.module';
import SayModule from './d-say/_d-say.module';

export default angular
  .module('angularMdStarterApp.common', [
    HeaderModule,
    SayModule,
  ])
  .name;
