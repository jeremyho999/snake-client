const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  conn.setEncoding("utf8");   //interpret incoming data as text.

  conn.on("data", (dataFromServer) => {               //receive data from server.
    console.log("Server says: ", dataFromServer);
  });

  conn.on("connect", () => {      //do something right after the first successful connection with Server:
    console.log("Successfully connected to game server!");    //print a message for the player (Client) to be notified
    conn.write("Name: JHO");      //send Server the name of the player (Client)
  });
  
  //conn.on("connect", () => {
  //  const intervalId = setInterval(() => {
  //    conn.write("Move: up");
  //  }, 50);

  //  setTimeout(() => {
  //    clearInterval(intervalId);
  //  }, 500);
  //});

  return conn;
};

module.exports = { connect };