import angular from 'angular';
import bcrypt from 'bcryptjs';

export function auth($log) {
  'ngInject';

  return {
    signup
  };

  function signup(user) {
    user.hash = bcrypt.hashSync(user.password);
    delete user.password;
    try {
      localStorage.setItem('register', angular.toJson(user));
    } catch (e) {
      $log(e);
    }
  }
}
