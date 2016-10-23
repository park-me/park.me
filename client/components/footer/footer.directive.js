'use strict';

angular.module('parkMeApp')
  .directive('footer', function() {
    return {
      templateUrl: 'components/footer/footer.html',
      restrict: 'E',
    };
  });
