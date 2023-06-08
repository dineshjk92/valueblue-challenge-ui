@sanity
Feature: Example

    As a user
    I want to verify links and menu index 

    Scenario: FinishMe
        When I start the browser
        And I navigate to 'http://example.com'
        And I click on 'More Information...' link
        Then a link with text 'RFC 2606' must be present
        And a link with text 'RFC 6761' must be present
        And the 'Domain Names' box must contain 'Root Zone Management' at index '2'