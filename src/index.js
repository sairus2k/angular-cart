import angular from 'angular';

import {auth} from './app/services/auth';
import {Products} from './app/services/products';
import {compareTo} from './app/directives/compare-to';
import {navbar} from './app/components/navbar';
import {login} from './app/components/login';
import {signup} from './app/components/signup';
import {search} from './app/components/search';
import 'angular-ui-router';
import routesConfig from './routes';

import './index.css';

export const app = 'app';

angular
  .module(app, ['ui.router'])
  .factory('Auth', auth)
  .factory('Products', Products)
  .config(routesConfig)
  .directive('compareTo', compareTo)
  .component('navbar', navbar)
  .component('login', login)
  .component('signup', signup)
  .component('search', search);

