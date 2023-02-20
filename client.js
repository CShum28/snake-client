const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: SNK");
    // conn.write("Move: up");
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 50);
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 500);
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;
