import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrapModal from 'angular-ui-bootstrap/src/modal';

import {auth} from './app/services/auth';
import {Products} from './app/services/products';
import {cart} from './app/services/cart';
import {compareTo} from './app/directives/compare-to';
import {navbar} from './app/components/navbar';
import {login} from './app/components/login';
import {signup} from './app/components/signup';
import {search} from './app/components/search';
import {alert} from './app/components/alert';
import {modal} from './app/components/modal';
import {routesConfig, routesAuth} from './routes';

import './index.css';

export const app = 'app';

angular
  .module(app, [uiRouter, uiBootstrapModal])
  .run(routesAuth)
  .factory('Auth', auth)
  .factory('Products', Products)
  .factory('Cart', cart)
  .config(routesConfig)
  .directive('compareTo', compareTo)
  .component('navbar', navbar)
  .component('login', login)
  .component('signup', signup)
  .component('search', search)
  .component('alert', alert)
  .component('modal', modal);

