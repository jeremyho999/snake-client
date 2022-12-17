const IP = "localhost";   // Server's IP address
const PORT = 50541;       // Server's PORT number

// Create an object to handle user keyboard input for playing the game and sending messages:
const inputKeys = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
  i: "Say: How are you doing?",
  j: "Say: Merci Boucoup!",
  k: "Say: Good morning!",
  l: "Say: Bonjour!"
};

module.exports = {
  IP,
  PORT,
  inputKeys
};