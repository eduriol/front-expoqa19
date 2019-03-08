'use strict';

describe('itemList', function() {

  // Load the module that contains the `itemList` component before each test
  beforeEach(module('itemList'));

  // Test the controller
  describe('ItemListController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('http://localhost:8082/item-manager/items')
                  .respond([{title: 'PC 486 66MHz 8MB'}, {title: 'Nintendo NES 8 bits'}]);

      ctrl = $componentController('itemList');
    }));

    it('should create an `item` property with 2 items fetched with `$http`', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.items).toEqual([]);

      $httpBackend.flush();
      expect(ctrl.items).toEqual([{title: 'PC 486 66MHz 8MB'}, {title: 'Nintendo NES 8 bits'}]);
    });

  });

});
