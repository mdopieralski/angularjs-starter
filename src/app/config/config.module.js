'use strict';

/**
 *
 * @name: angularMdStarterApp.config
 *
 */

const APP_CONSTANTS = require(`./data/${ process.env.USE_CONFIG }.constants.json`);

export default angular
  .module('angularMdStarterApp.config', [])
  .constant('APP_CONSTANTS', APP_CONSTANTS)
  .name;
