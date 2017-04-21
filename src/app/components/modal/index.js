export const modal = {
  template: require('./modal.html'),
  bindings: {
    close: '&',
    dismiss: '&'
  },
  controller() {
    this.ok = () => {
      this.close({$value: true});
    };

    this.cancel = () => {
      this.dismiss({$value: 'cancel'});
    };
  }
};
