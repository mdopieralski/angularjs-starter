'use strict';

/**
 *
 * @name: angularMdStarterApp.sayHello
 *
 */


import SayHelloDirective from './d-say.directive.js';

export default angular
  .module('angularMdStarterApp.sayHello', [])
  .directive('dSay', () => new SayHelloDirective())
  .name;
