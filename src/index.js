import angular from 'angular';

import {hello} from './app/hello';
import {navbar} from './app/components/navbar';
import {login} from './app/components/login';
import {signup} from './app/components/signup';
import 'angular-ui-router';
import routesConfig from './routes';

import './index.css';

export const app = 'app';

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .component('app', hello)
  .component('navbar', navbar)
  .component('login', login)
  .component('signup', signup);

