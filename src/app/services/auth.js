import angular from 'angular';
import bcrypt from 'bcryptjs';

export function auth($rootScope, $log) {
  'ngInject';

  let email = '';
  let isLogin = false;

  return {
    signup,
    login,
    logout,
    getUser
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
      isLogin = true;
      saveLogin(email);
      $rootScope.$emit('login:success');
      return true;
    }
    $rootScope.$emit('login:failed');
    logout();
    return false;
  }

  function logout() {
    email = '';
    isLogin = false;
    removeLogin();
  }

  function getUser() {
    const currentUser = getLogin();
    if (currentUser) {
      email = currentUser;
      isLogin = true;
    }
    return {email, isLogin};
  }

  function saveLogin(email) {
    const date = new Date().getTime();
    try {
      localStorage.setItem('currentUser', angular.toJson({email, date}));
    } catch (e) {
      $log(e);
    }
  }

  function getLogin() {
    const day = 60 * 60 * 24;
    const today = new Date().getTime();
    const yesterday = today - day;
    try {
      const currentUser = angular.fromJson(localStorage.getItem('currentUser'));
      if (currentUser && currentUser.date >= yesterday) {
        return currentUser.email;
      }
      removeLogin();
    } catch (e) {
      $log(e);
    }
  }

  function removeLogin() {
    try {
      localStorage.removeItem('currentUser');
    } catch (e) {
      $log(e);
    }
  }
}
