'use strict';

/**
 *
 * @name: dSayHelloDirective
 *
 */

import DirectiveTemplate from './d-say.directive.html';

class SayDirective {

  constructor($timeout) {
    'ngInject';

    this.template = DirectiveTemplate;
    this.restrict = 'EA';
    this.replace = true;
    this.$timeout = $timeout;
  }
  link($scope, $element, $attrs) {

    $scope.content = $attrs.content;
  }
}

export default SayDirective;
