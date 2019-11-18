Feature: Create new article
  User would like to create an article once he's logged in

  Scenario Outline: User wants to create a new article
    Given User with email "<email>" and password "<password>" is logged in
    When User wants to create an article with title "<title>" and text "<text>"
    Then article should be created successfully

      Examples:
    | email                             | password    | title             | text                  |
    | jarno.bogaert99@gmail.com         | jarno123    | New C# compiler   | This is a simple test |