/** @ngInject */
export function routesConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('search', {
      url: '/',
      component: 'search',
      authRequired: true
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
  $transitions.onStart({to: state => state.authRequired}, trans => {
    const $state = trans.router.stateService;
    const isLogin = Auth.getUser().isLogin;
    if (!isLogin) {
      return $state.target('login');
    }
    return true;
  });

  $transitions.onStart({to: state => !state.authRequired}, trans => {
    const $state = trans.router.stateService;
    const isLogin = Auth.getUser().isLogin;
    if (isLogin) {
      return $state.target('search');
    }
    return true;
  });
}
