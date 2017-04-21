export const navbar = {
  template: require('./navbar.html'),
  controller($rootScope, Auth) {
    'ngInject';

    const getNewUser = () => {
      this.user = Auth.getUser();
    };

    const loginHandler = $rootScope.$on('login:success', getNewUser);
    const logoutHandler = $rootScope.$on('logout', getNewUser);

    this.logout = () => {
      Auth.logout();
    };

    this.$onDestroy = () => {
      loginHandler();
      logoutHandler();
    };

    this.$onInit = () => {
      getNewUser();
    };
  }
};
