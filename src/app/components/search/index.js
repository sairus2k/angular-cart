import angular from 'angular';
import './search.css';

export const search = {
  template: require('./search.html'),
  controller(Products, Cart) {
    'ngInject';

    this.items = Products.get();
    this.colors = this.items.map(item => item.color);
    this.colors = [...new Set(this.colors)]; // Filter unique values

    this.rangePrice = (field, min, max) => {
      if (angular.isUndefined(min) || min === null) {
        min = Number.MIN_VALUE;
      }
      if (angular.isUndefined(max) || max === null) {
        max = Number.MAX_VALUE;
      }
      return item => min <= item[field] && item[field] <= max;
    };

    this.rangeDate = (field, from, to) => {
      from = new Date(from).getTime() || Number.MIN_VALUE;
      to = new Date(to).getTime() || Number.MAX_VALUE;
      return item => from <= item[field] && item[field] <= to;
    };

    this.order = item => {
      item.inCart = true;
      Cart.add(item);
    };
  }
};
