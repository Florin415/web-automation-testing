Feature: Add to cart test

    Background:
        Given User navigates to the application
        And User clicks on the consent button
        And User clicks on the login link

    
    Scenario Outline: Adding a product to the cart
        And User enters the email as "florin415@yahoo.com"
        And User enters the password as "Pass1122"
        And User clicks on the login button
        And User clicks on the view product button
        When User clicks on the add to cart button
        And User clicks on the view cart button
        Then The cart should have the product added
