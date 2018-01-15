$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/RS_Checkout.feature");
formatter.feature({
  "line": 2,
  "name": "A guest checkout",
  "description": "",
  "id": "a-guest-checkout",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@search"
    }
  ]
});
formatter.before({
  "duration": 20679575100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Add item to basket and checkout as guest",
  "description": "",
  "id": "a-guest-checkout;add-item-to-basket-and-checkout-as-guest",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on the RS home web page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I search for \"818-8767\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click the search button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see \"ABCU-5740ARZ\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I make the quantity \"2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click the add to cart button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select view basket",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I checkout basket",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I complete order",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.i_am_on_the_rs_home_web_page()"
});
formatter.result({
  "duration": 7513630598,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "818-8767",
      "offset": 14
    }
  ],
  "location": "SearchSteps.i_search_for(String)"
});
formatter.result({
  "duration": 386613678,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.i_click_the_search_button()"
});
formatter.result({
  "duration": 7337406590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABCU-5740ARZ",
      "offset": 14
    }
  ],
  "location": "SearchSteps.i_should_see(String)"
});
formatter.result({
  "duration": 188184192,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "CheckoutSteps.i_make_the_quantity(String)"
});
formatter.result({
  "duration": 343211130,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.i_click_the_add_to_cart_button()"
});
formatter.result({
  "duration": 1566186212,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.i_select_view_basket()"
});
formatter.result({
  "duration": 18287889881,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.i_checkout_basket()"
});
formatter.result({
  "duration": 7958314481,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.i_complete_order()"
});
formatter.result({
  "duration": 5819770590,
  "status": "passed"
});
formatter.after({
  "duration": 2198819078,
  "status": "passed"
});
formatter.before({
  "duration": 16151430373,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Add a different item to basket and checkout as guest",
  "description": "",
  "id": "a-guest-checkout;add-a-different-item-to-basket-and-checkout-as-guest",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I am on the RS home web page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I search for \"433-6016\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click the search button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I should see \"XG12P20\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I make the quantity \"1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I click the add to cart button",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I select view basket",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I checkout basket",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I complete order",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.i_am_on_the_rs_home_web_page()"
});
formatter.result({
  "duration": 31643307523,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "433-6016",
      "offset": 14
    }
  ],
  "location": "SearchSteps.i_search_for(String)"
});
formatter.result({
  "duration": 218068187,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.i_click_the_search_button()"
});
formatter.result({
  "duration": 8827876760,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "XG12P20",
      "offset": 14
    }
  ],
  "location": "SearchSteps.i_should_see(String)"
});
formatter.result({
  "duration": 190534575,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 21
    }
  ],
  "location": "CheckoutSteps.i_make_the_quantity(String)"
});
formatter.result({
  "duration": 306758806,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.i_click_the_add_to_cart_button()"
});
formatter.result({
  "duration": 491020560,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.i_select_view_basket()"
});
formatter.result({
  "duration": 8184243365,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.i_checkout_basket()"
});
formatter.result({
  "duration": 975354332,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.i_complete_order()"
});
formatter.result({
  "duration": 5537721599,
  "status": "passed"
});
formatter.after({
  "duration": 2098855086,
  "status": "passed"
});
formatter.uri("features/RS_Search.feature");
formatter.feature({
  "line": 2,
  "name": "A simple RS search",
  "description": "",
  "id": "a-simple-rs-search",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@search"
    }
  ]
});
formatter.before({
  "duration": 15453556408,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "A simple RS catalogue search scenario",
  "description": "",
  "id": "a-simple-rs-search;a-simple-rs-catalogue-search-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on the RS home web page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I search for \"909-8132\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click the search button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see \"TZT 241 AAA-01\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.i_am_on_the_rs_home_web_page()"
});
formatter.result({
  "duration": 20378252625,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "909-8132",
      "offset": 14
    }
  ],
  "location": "SearchSteps.i_search_for(String)"
});
formatter.result({
  "duration": 620173610,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.i_click_the_search_button()"
});
formatter.result({
  "duration": 15817028048,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TZT 241 AAA-01",
      "offset": 14
    }
  ],
  "location": "SearchSteps.i_should_see(String)"
});
formatter.result({
  "duration": 205182561,
  "status": "passed"
});
formatter.after({
  "duration": 1988011163,
  "status": "passed"
});
formatter.before({
  "duration": 14771472693,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Another simple RS catalogue search scenario",
  "description": "",
  "id": "a-simple-rs-search;another-simple-rs-catalogue-search-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on the RS home web page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I search for \"896-8660\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click the search button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should see \"Raspberry Pi 3 Model B\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.i_am_on_the_rs_home_web_page()"
});
formatter.result({
  "duration": 7568695683,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "896-8660",
      "offset": 14
    }
  ],
  "location": "SearchSteps.i_search_for(String)"
});
formatter.result({
  "duration": 304784758,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.i_click_the_search_button()"
});
formatter.result({
  "duration": 6845809552,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Raspberry Pi 3 Model B",
      "offset": 14
    }
  ],
  "location": "SearchSteps.i_should_see(String)"
});
formatter.result({
  "duration": 184680000,
  "status": "passed"
});
formatter.after({
  "duration": 1937617765,
  "status": "passed"
});
formatter.before({
  "duration": 15749277052,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Search for Heat Shrinkable Sleeving",
  "description": "",
  "id": "a-simple-rs-search;search-for-heat-shrinkable-sleeving",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I am on the RS home web page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I search for \"Heat Shrinkable Sleeving\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click the search button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I select \"2508886773\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I should see \"FP221 1/2 CLEAR 4\u0027\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.i_am_on_the_rs_home_web_page()"
});
formatter.result({
  "duration": 8001864569,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Heat Shrinkable Sleeving",
      "offset": 14
    }
  ],
  "location": "SearchSteps.i_search_for(String)"
});
formatter.result({
  "duration": 331974108,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.i_click_the_search_button()"
});
formatter.result({
  "duration": 6366746609,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2508886773",
      "offset": 10
    }
  ],
  "location": "SearchSteps.i_select(String)"
});
formatter.result({
  "duration": 12795463196,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FP221 1/2 CLEAR 4\u0027",
      "offset": 14
    }
  ],
  "location": "SearchSteps.i_should_see(String)"
});
formatter.result({
  "duration": 185390760,
  "status": "passed"
});
formatter.after({
  "duration": 1982579537,
  "status": "passed"
});
});