export const alert = {
  template: require('./alert.html'),
  controller($rootScope) {
    'ngInject';

    this.show = false;
    this.msg = '';
    this.type = 'alert-warning';

    this.close = () => {
      this.show = false;
    };

    const loginFailedHandler = $rootScope.$on('login:failed', () => {
      this.show = true;
      this.msg = 'Email or password is incorrect. Please check again.';
      this.type = 'alert-danger';
    });
    const loginSuccessHandler = $rootScope.$on('login:success', () => {
      this.show = false;
      this.msg = '';
      this.type = 'alert-warning';
    });
    const registerDuplicateHandler = $rootScope.$on('register:duplicate', () => {
      this.show = true;
      this.msg = 'Email already registered. Please login.';
      this.type = 'alert-info';
    });
    const registerSuccessHandler = $rootScope.$on('register:success', () => {
      this.show = true;
      this.msg = 'You registered successfully. Please confirm your email.';
      this.type = 'alert-success';
    });

    this.$onDestroy = () => {
      loginFailedHandler();
      loginSuccessHandler();
      registerDuplicateHandler();
      registerSuccessHandler();
    };
  }
};
