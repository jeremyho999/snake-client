//const playerName = process.argv[2];
//console.log(playerName);

const { connect } = require("./client");

const { setupInput } = require("./input");

console.log("Connecting ...");
//connect();  // after you pass the obj return from "connect()" into "setupInput()", you need to comment out this line!
              // otherwise, "connect()" will be executed twice!
setupInput(connect());