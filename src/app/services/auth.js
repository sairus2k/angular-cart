import angular from 'angular';
import bcrypt from 'bcryptjs';

export function auth($rootScope, $state, $log) {
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
    const hash = bcrypt.hashSync(user.password);
    let duplicate;

    try {
      duplicate = localStorage.getItem(user.email);
    } catch (e) {
      $log(e);
    }

    if (duplicate !== null) {
      $rootScope.$emit('register:duplicate');
      $state.go('login');
      return false;
    }

    try {
      localStorage.setItem(user.email, hash);
      login(user);
      $rootScope.$emit('register:success');
    } catch (e) {
      $log(e);
    }
  }

  function login(user) {
    let hash;
    try {
      hash = localStorage.getItem(user.email);
    } catch (e) {
      $log(e);
    }
    if (hash && bcrypt.compareSync(user.password, hash)) {
      email = user.email;
      isLogin = true;
      saveLogin(email);
      $rootScope.$emit('login:success');
      $state.go('search');
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
    $rootScope.$emit('logout');
    $state.go('login');
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
    const day = 1000 * 60 * 60 * 24;
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
