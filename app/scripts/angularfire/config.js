angular.module('firebase.config', [])
  .constant('FBURL', 'https://portfolio-c6fab.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','anonymous','google','github'])

  .constant('loginRedirectPath', '/login');
