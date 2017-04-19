import './search.css';

export const search = {
  template: require('./search.html'),
  controller(Products) {
    'ngInject';

    this.items = Products.get();
  }
};
