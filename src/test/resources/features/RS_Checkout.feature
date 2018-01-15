@search
Feature: A guest checkout

Scenario: Add item to basket and checkout as guest
  Given I am on the RS home web page
  And I search for "818-8767"
  When I click the search button
  Then I should see "ABCU-5740ARZ"
  Then I make the quantity "2"
  Then I click the add to cart button
  Then I select view basket
  Then I checkout basket
  Then I complete order

Scenario: Add a different item to basket and checkout as guest
  Given I am on the RS home web page
  And I search for "433-6016"
  When I click the search button
  Then I should see "XG12P20"
  Then I make the quantity "1"
  Then I click the add to cart button
  Then I select view basket
  Then I checkout basket
  Then I complete order
