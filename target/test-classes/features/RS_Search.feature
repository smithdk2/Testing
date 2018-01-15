@search
Feature: A simple RS search

Scenario: A simple RS catalogue search scenario
  Given I am on the RS home web page
  And I search for "909-8132"
  When I click the search button
  Then I should see "TZT 241 AAA-01"

Scenario: Another simple RS catalogue search scenario
  Given I am on the RS home web page
  And I search for "896-8660"
  When I click the search button
  Then I should see "Raspberry Pi 3 Model B"

Scenario: Search for Heat Shrinkable Sleeving
  Given I am on the RS home web page
  And I search for "Heat Shrinkable Sleeving"
  When I click the search button
  Then I select "2508886773"
  Then I should see "FP221 1/2 CLEAR 4'"