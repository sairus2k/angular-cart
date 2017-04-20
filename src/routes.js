/** @ngInject */
export function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('search', {
      url: '/',
      component: 'search'
    })
    .state('login', {
      url: '/login',
      component: 'login'
    })
    .state('signup', {
      url: '/signup',
      component: 'signup'
    });
}

/** @ngInject */
export function routesAuth($transitions, Auth) {
  $transitions.onStart({to: 'search'}, trans => {
    const $state = trans.router.stateService;
    const isLogin = Auth.getUser().isLogin;
    if (!isLogin) {
      return $state.target('login');
    }
    return true;
  });
}
