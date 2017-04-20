export const navbar = {
  template: require('./navbar.html'),
  controller($rootScope, $state, Auth) {
    'ngInject';

    this.user = Auth.getUser();
    const loginEvent = $rootScope.$on('login', () => {
      this.user = Auth.getUser();
    });

    this.logout = () => {
      Auth.logout();
      $rootScope.$emit('login');
      $state.go('login');
    };

    this.$onDestroy = () => {
      loginEvent();
    };
  }
};
