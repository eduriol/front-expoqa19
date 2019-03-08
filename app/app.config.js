'use strict';

angular.
  module('expoqaApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/buyers', {
          template: '<buyer-list></buyer-list>'
        }).
        when('/items', {
          template: '<item-list></item-list>'
        }).
        otherwise('/buyers');
    }
  ]);
