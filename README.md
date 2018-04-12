# React-tic-tac-toe
The game tic-tac-toe, built with React


# Main Concepts

### Display vs Logic Components
Notice in this example app the difference between the Board and Square components.

The Board component holds all state related to the game play, and also holds all the game logic.

The Square component on the other hand, contains no logic and does not use state. Its only job is to display the contents sent to it from Board.

This is an example of how display and logic components are used in React. It separates where logic lives and where the display is laid out. This makes it easier to trace and fix bugs in your code.
