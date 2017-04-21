export const alert = {
  template: require('./alert.html'),
  controller($rootScope) {
    'ngInject';

    this.show = false;
    this.msg = '';
    this.close = () => {
      this.show = false;
    };

    const loginFailedHandler = $rootScope.$on('login:failed', () => {
      this.show = true;
      this.msg = 'Email or password is incorrect. Please check again.';
    });
    const loginSuccessHandler = $rootScope.$on('login:success', () => {
      this.show = false;
      this.msg = '';
    });

    this.$onDestroy = () => {
      loginFailedHandler();
      loginSuccessHandler();
    };
  }
};
