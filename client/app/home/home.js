'use strict';

angular.module('parkMeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        template: '<home></home>'
      });
  });
