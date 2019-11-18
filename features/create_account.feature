Feature: Create Account
  User would like to create an account to use the app

  Scenario Outline: User wants to create an account
    Given User with email "<email>" and password "<password>" wants to create an account
    When User creates account
    Then User should be successfully created

      Examples:
    | email                             | password    |
    | logan.bogaert99@gmail.com         | Logan123    |
