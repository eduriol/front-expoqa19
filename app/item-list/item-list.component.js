'use strict';

// Register `itemList` component, along with its associated controller and template
angular.
  module('itemList').
  component('itemList', {
    templateUrl: 'item-list/item-list.template.html',
    controller: ['Item',
      function ItemListController(Item) {
        this.items = Item.query();
      }
    ]
  });
