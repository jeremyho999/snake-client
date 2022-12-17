const { inputKeys } = require("./constants");

// Setup a variable to store the active TCP connection object:
let connection;

// Setup a function used by stdin event listener (to interact with Server):
const handleUserInput = function(key) {
  if (key === "\u0003") process.exit();   // Handle CTRL+C user keyboard input for exiting the game.
  
  for (const inputKey in inputKeys) {
    if (key === inputKey) connection.write(inputKeys[inputKey]);
  }   // Handle other user input for playing the game and sending messages.
};

// Setup interface to handle user input from stdin (user keyboard):
const setupInput = (conn) => {
  connection = conn;    // Store the active TCP connection object in the "connection" variable.

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // Register an event listener for stdin, before returning the stdin object:
  stdin.on("data", handleUserInput);
  // This returned stdin object will allow us to listen for keyboard input and react to it:
  return stdin;
};

module.exports = { setupInput };