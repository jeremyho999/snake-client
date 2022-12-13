const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  conn.setEncoding("utf8");   //interpret incoming data as text.

  conn.on("data", (data) => {               //receive data from server.
    console.log("Server says: ", data);
  });

  return conn;
};


module.exports = { connect };