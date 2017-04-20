import angular from 'angular';
import './search.css';

export const search = {
  template: require('./search.html'),
  controller(Products) {
    'ngInject';

    this.items = Products.get();
    this.colors = this.items.map(item => item.color);
    this.colors = [...new Set(this.colors)]; // Filter unique values
    this.range = (field, min, max) => {
      if (angular.isUndefined(min) || min === null) {
        min = Number.MIN_VALUE;
      }
      if (angular.isUndefined(max) || max === null) {
        max = Number.MAX_VALUE;
      }
      return item => min <= item[field] && item[field] <= max;
    };
  }
};
