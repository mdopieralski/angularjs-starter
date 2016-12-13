'use strict';

/**
 *
 * @name: angularMdStarterApp.root
 *
 */

import RootConfig from './root.config';
import RootComponent from './root.component';

export default angular
  .module('angularMdStarterApp.root', [])
  .config(RootConfig)
  .component('rootComponent', RootComponent)
  .name;
