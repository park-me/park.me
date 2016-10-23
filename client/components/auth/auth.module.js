'use strict';

angular.module('parkMeApp.auth', ['parkMeApp.constants', 'parkMeApp.util', 'ngCookies', 'ui.router'])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
