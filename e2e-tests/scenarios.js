'use strict';

// AngularJS E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('expo:QA Application', function() {

  it('should redirect `index.html` to `index.html#!/buyers', function() {
    browser.get('index.html');
    expect(browser.getCurrentUrl()).toContain('index.html#!/buyers');
  });

  describe('View: Buyer list', function() {

    beforeEach(function() {
      browser.get('index.html#!/buyers');
    });

    it('should render buyer properties', function() {
      element.all(by.css('.elements li p span')).first().getText()
      .then(function(text) {
        expect(text).toEqual('Buyer 1:');
      });
    });

    it('should render all buyers', function() {
        expect(element.all(by.xpath("//ul[@class='elements']/li")).count()).toEqual(2);
    });

  });

  describe('View: Item list', function() {

    beforeEach(function() {
      browser.get('index.html#!/items');
    });

    it('should render item properties', function() {
      element.all(by.css('.elements li p span')).first().getText()
      .then(function(text) {
        expect(text).toEqual('Item 1:');
      });
    });

    it('should render all items', function() {
        expect(element.all(by.xpath("//ul[@class='elements']/li")).count()).toEqual(5);
    });

  });

});
