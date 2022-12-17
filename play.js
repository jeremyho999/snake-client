const { connect } = require("./client");

const { setupInput } = require("./input");

console.log("Connecting ...");

/*
** Pass the connection object returned from connect() into setupInput(),
** so that Client/Player can use stdin/keyboard input to interact with Server:
*/
setupInput(connect());