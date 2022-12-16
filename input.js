// Stores the active TCP connection object:
let connection;

// setup a function used by stdin event listener:
const handleUserInput = function(key) {
  if (key === "\u0003") process.exit();

  if (key === "w") connection.write("Move: up");        //console.log("Move: up");
  if (key === "a") connection.write("Move: left");      //console.log("Move: left");  
  if (key === "s") connection.write("Move: down");      //console.log("Move: down");
  if (key === "d") connection.write("Move: right");     //console.log("Move: right");

  if (key === "i") connection.write("Say: How are you doing?");
  if (key === "j") connection.write("Say: Merci Boucoup!");
  if (key === "k") connection.write("Say: Good morning!");
  if (key === "l") connection.write("Say: Bonjour!");
};

// setup interface to handle user input from stdin:
const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // register an event listener for stdin, before you return the stdin obj:
  stdin.on("data", handleUserInput);

  return stdin;
};

//setupInput();   //this line is only for testing this file separately!

module.exports = { setupInput };