const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: SNK");
  });

  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };
