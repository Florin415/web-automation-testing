Feature: User Authentication tests

    Background:
        Given User navigates to the application
        And User clicks on the consent button
        And User clicks on the login link

    Scenario: Login should be successful
        Given User enters valid credentials
        When User clicks on the login button
        Then Login should be successful

    Scenario: Login should not be successful
        Given User enters invalid credentials
        When User clicks on the login button
        Then Login should fail
