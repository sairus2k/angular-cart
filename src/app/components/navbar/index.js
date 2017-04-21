export const navbar = {
  template: require('./navbar.html'),
  controller($rootScope, $uibModal, Auth) {
    'ngInject';

    const getNewUser = () => {
      this.user = Auth.getUser();
    };

    const loginHandler = $rootScope.$on('login:success', getNewUser);
    const logoutHandler = $rootScope.$on('logout', getNewUser);

    this.logout = () => {
      Auth.logout();
    };

    this.openCart = () => {
      const modalInstance = $uibModal.open({
        component: 'modal'
      });

      modalInstance.result.then(() => {}, () => {});
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
