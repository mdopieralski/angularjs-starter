'use strict';

/**
 *
 * @name: RootComponent
 *
 */

import RootTemplate from './root.index.html';

class RootComponentController {

  constructor() {

    /**
     *
     * @CONFIG
     *
     */

    var headers = ['Hello, I\'m root component.', 'I can do cool things, mate.'];

    const rootComponent = this;
    rootComponent.header = headers[0];

    /**
     *
     * @PUBLIC
     *
     */

    rootComponent.toggleHeaderText = () => {

      rootComponent.header = (headers.indexOf(rootComponent.header) === 0 ? headers[1] : headers[0]);
    };

    /**
     *
     * @PRIVATE
     *
     */

    /**
     *
     * @INIT
     *
     */
  }
}

export default {
  template: RootTemplate,
  controllerAs: 'rootComponent',
  controller: RootComponentController
};
