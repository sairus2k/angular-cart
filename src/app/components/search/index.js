import './search.css';

export const search = {
  template: require('./search.html'),
  controller(Products) {
    'ngInject';

    this.items = Products.get();
    this.colors = this.items.map(item => item.color);
    this.colors = [...new Set(this.colors)]; // Filter unique values
  }
};
