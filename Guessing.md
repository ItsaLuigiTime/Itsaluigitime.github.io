This flowchart shows the basic sequence of events needed for a simple guessing game, in which a player tries to guess a random target number between 1 and 10.

```mermaid

flowchart TD

    A[Select Random Integer between 1 and 10]
    A--> B[/Player inputs Guess/]
    B--> C[Check that Guess is an integer between 1 and 10]
    C--If Guess is Valid--> D[Compare Guess to Random Number]
    C--If Guess is Invalid--> H["`Show Message 'Sorry, that guess is invalid. Try guessing an Integer between 1 and 10!' `"]
    D--If Guess is Equal to Random --> F["Show message 'Winner! Congratulations! Want to play again?'"]
    D--If Guess is Greater Than Random --> E[Show Message 'Sorry, too high! Try Again!']
    D--If Guess is Less Than Random --> G[Show Message 'Sorry, too low! Try Again!']
    E-->B
    G-->B
    H-->B
    F-- Yes -->A
    F-- No -->I[Show Message 'Thanks for playing! Goodbye!]

```
