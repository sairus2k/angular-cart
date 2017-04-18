export const signup = {
  template: require('./signup.html'),
  controller(Auth) {
    'ngInject';

    this.user = {};
    this.submit = () => {
      Auth.signup({
        email: this.user.email,
        password: this.user.password
      });
    };
  }
};
