const playerName = process.argv[2];
//console.log(playerName);

const IP = "localhost";
const PORT = 50541;

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
  playerName,
  IP,
  PORT,
  inputKeys
};