'use strict';

describe('Buyer', function() {
  var $httpBackend;
  var Buyer;
  var buyersData = [
    {name: 'Buyer X'},
    {name: 'Buyer Y'},
    {name: 'Buyer Z'}
  ];

  // Add a custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // Load the module that contains the `Buyer` service before each test
  beforeEach(module('core.buyer'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_$httpBackend_, _Buyer_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('http://localhost:8081/buyer-manager/buyers').respond(buyersData);

    Buyer = _Buyer_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the buyers data from `http://localhost:8081/buyer-manager/buyers`', function() {
    var buyers = Buyer.query();

    expect(buyers).toEqual([]);

    $httpBackend.flush();
    expect(buyers).toEqual(buyersData);
  });

});
