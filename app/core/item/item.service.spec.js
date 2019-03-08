'use strict';

describe('Item', function() {
  var $httpBackend;
  var Item;
  var itemsData = [
    {title: 'Item X'},
    {title: 'Item Y'},
    {title: 'Item Z'}
  ];

  // Add a custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // Load the module that contains the `Item` service before each test
  beforeEach(module('core.item'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_$httpBackend_, _Item_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('http://localhost:8082/item-manager/items').respond(itemsData);

    Item = _Item_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the items data from `http://localhost:8082/item-manager/items`', function() {
    var items = Item.query();

    expect(items).toEqual([]);

    $httpBackend.flush();
    expect(items).toEqual(itemsData);
  });

});
