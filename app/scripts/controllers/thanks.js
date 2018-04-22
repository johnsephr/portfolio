'use strict';
/**
 * @ngdoc function
 * @name portfolioApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Manages authentication to any active providers.
 */
angular.module('portfolioApp')
  .controller('ThanksCtrl', function ($scope, $rootScope, $timeout) {
    
    $rootScope.ready = false;
    
        $timeout(function () {
          $rootScope.ready = true;
        }, 1);
  });
