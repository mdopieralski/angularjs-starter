'use strict';

/**
 *
 * @name: angularMdStarterApp
 *
 */

import CommonModule from './common/common.module';
import ComponentsModule from './components/components.module';
import ConfigModule from './config/config.module';

import AppConfig from './app.config';
import AppRun from './app.run';


export default angular.module('angularMdStarterApp', [
    'ui.router',
    ConfigModule,
    ComponentsModule,
    CommonModule
  ])
  .config(AppConfig)
  .run(AppRun)
  .name;
