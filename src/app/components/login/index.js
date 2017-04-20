export const login = {
  template: require('./login.html'),
  controller($rootScope, $state, Auth) {
    'ngInject';

    this.submit = () => {
      const result = Auth.login({
        email: this.user.email,
        password: this.user.password
      });
      if (result) {
        $state.go('search');
      }
      $rootScope.$emit('login');
    };
  }
};
