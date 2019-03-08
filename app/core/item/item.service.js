'use strict';

angular.
  module('core.item').
  factory('Item', ['$resource',
    function($resource) {
      return $resource('http://localhost:8082/item-manager/:itemId', {},
      {
        query: {
          method: 'GET',
          params: {itemId: 'items'},
          isArray: true
        }
      });
    }
  ]);
