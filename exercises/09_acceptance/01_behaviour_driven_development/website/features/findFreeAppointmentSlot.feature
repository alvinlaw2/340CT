
Feature: Find Free Appointment Slot
  As a student
  I want to be able to find a free appointment
  So that I can meet a suitable academic to get help with my work

  Scenario: Listing All Free Slots
    Given I am on the Theta website home page
    When I click on "Find appointment"
    Then I should see "Free Appointments"
    And I should see a table

  Scenario: Listing slots for 302CEM
    Given I am on the Theta website home page
    When I click on "Find appointment"
    And I select the "search" box
    And I enter the text "302CEM"
    And I click on "Search"
    Then I should see "Free Appointments for 302CEM"
    And I should see a table
