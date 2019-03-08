'use strict';

// Register `buyerList` component, along with its associated controller and template
angular.
  module('buyerList').
  component('buyerList', {
    templateUrl: 'buyer-list/buyer-list.template.html',
    controller: ['Buyer',
      function BuyerListController(Buyer) {
        this.buyers = Buyer.query();
      }
    ]
  });
