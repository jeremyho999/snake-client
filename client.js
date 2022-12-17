const net = require("net");
const { IP, PORT } = require("./constants");

// Establish a connection with the game server (Server):
const connect = function() {
  // Use Node's net library to create a conn object that represents the connection with Server.
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // Interpret incoming data as text:
  conn.setEncoding("utf8");

  // Receive data from Server:
  conn.on("data", (dataFromServer) => {
    console.log("Server says: ", dataFromServer);
  });

  // Things to do right after the first successful connection with Server:
  conn.on("connect", () => {
    // Print a message for the player/Client to be notified:
    console.log("Successfully connected to game server!");
    // Send Server the name of the player/Client:
    conn.write(`Name: JHO`);
  });
  
  // This returned conn object is full of useful methods and properties that can be used to interact with Server:
  return conn;
};

module.exports = { connect };