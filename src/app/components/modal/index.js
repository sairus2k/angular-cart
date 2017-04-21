export const modal = {
  template: require('./modal.html'),
  bindings: {
    close: '&',
    dismiss: '&'
  },
  controller(Cart) {
    'ngInject';

    this.$onInit = () => {
      this.items = Cart.get();
    };

    this.ok = () => {
      this.close({$value: true});
    };

    this.cancel = () => {
      this.dismiss({$value: 'cancel'});
    };

    this.remove = index => {
      Cart.remove(index);
    };
  }
};
