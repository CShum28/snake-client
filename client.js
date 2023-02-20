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

const handleUserInput = (key) => {
  if (key === "\u0003") {
    console.log("Good bye!");
    process.exit();
  }
};

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { connect, setupInput };
