# React-tic-tac-toe
The game tic-tac-toe, built with React


# Main Concepts

### Display vs Logic Components
In this example app, notice the difference between the Board and Square components.

The Board component holds all state related to the game play, and also holds all the game logic.

The Square component on the other hand, contains no logic and does not use state. Its only job is to display the contents sent to it from Board ("X" or "O").

This is an example of how display and logic components are used in React. We separate our logic from the view. This makes it easier to trace and fix bugs in your code.
