import './rating.css';

export const rating = {
  template: require('./rating.html'),
  bindings: {
    ngModel: '<',
    onRatingSelect: '&'
  },
  controller() {
    this.toggle = index => {
      this.ngModel = index + 1;
      this.onRatingSelect({
        rating: index + 1
      });
    };

    this.$onChanges = () => {
      this.stars = [];
      for (let i = 0; i < 5; i++) {
        this.stars.push({
          filled: i < this.ngModel
        });
      }
    };
  }
};
