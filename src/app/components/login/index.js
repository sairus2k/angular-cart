export const login = {
  template: require('./login.html'),
  controller(Auth) {
    'ngInject';

    this.submit = () => {
      Auth.login({
        email: this.user.email,
        password: this.user.password
      });
    };
  }
};
