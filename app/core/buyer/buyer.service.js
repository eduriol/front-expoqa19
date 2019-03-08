'use strict';

angular.
  module('core.buyer').
  factory('Buyer', ['$resource',
    function($resource) {
      return $resource('http://localhost:8081/buyer-manager/:buyerId', {},
      {
        query: {
          method: 'GET',
          params: {buyerId: 'buyers'},
          isArray: true
        }
      });
    }
  ]);
