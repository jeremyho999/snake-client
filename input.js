// setup a function used by stdin event listener:
const handleUserInput = function(key) {
  if (key === "\u0003") {
    process.exit();
  }
};

// setup interface to handle user input from stdin:
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // register an event listener for stdin, before you return the stdin obj:
  stdin.on("data", handleUserInput);

  return stdin;
};


module.exports = { setupInput };