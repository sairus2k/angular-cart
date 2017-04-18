import angular from 'angular';
import bcrypt from 'bcryptjs';

export function auth($log) {
  'ngInject';

  let email = '';
  let authenticated = false;

  return {
    signup,
    login,
    email,
    authenticated
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

  function login(user) {
    let localUser;
    try {
      localUser = angular.fromJson(localStorage.getItem('register'));
    } catch (e) {
      $log(e);
    }
    if (user.email === localUser.email && bcrypt.compareSync(user.password, localUser.hash)) {
      email = user.email;
      authenticated = true;
      return true;
    }
    email = '';
    authenticated = false;
    return false;
  }
}
