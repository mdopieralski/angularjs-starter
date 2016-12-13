'use strict';

/**
 *
 * @name: angularMdStarterApp.home
 *
 */

import HomeConfig from './home.config';
import HomeComponent from './home.component';

export default angular
  .module('angularMdStarterApp.home', [])
  .config(HomeConfig)
  .component('homeComponent', HomeComponent)
  .name;
