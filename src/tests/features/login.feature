Feature: User Authentication tests

    Background:
        Given User navigates to the application
        And User clicks on the consent button
        And User clicks on the login link

    Scenario: Login should be successful
        And User enters the email as "florin415@yahoo.com"
        And User enters the password as "Pass1122"
        When User clicks on the login button
        Then Login should be successful


    Scenario: Login should not be successful
        Given User enters the email as "florin4444@yahoo.com"
        Given User enters the password as "Pass1234567"
        When User clicks on the login button
        Then Login should fail