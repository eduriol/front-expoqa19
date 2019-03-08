'use strict';

describe('buyerList', function() {

  // Load the module that contains the `buyerList` component before each test
  beforeEach(module('buyerList'));

  // Test the controller
  describe('BuyerListController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('http://localhost:8081/buyer-manager/buyers')
                  .respond([{name: 'John Doe'}, {name: 'Jane Doe'}]);

      ctrl = $componentController('buyerList');
    }));

    it('should create a `buyer` property with 2 buyers fetched with `$http`', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.buyers).toEqual([]);

      $httpBackend.flush();
      expect(ctrl.buyers).toEqual([{name: 'John Doe'}, {name: 'Jane Doe'}]);
    });

  });

});
