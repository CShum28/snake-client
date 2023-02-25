const constant = require("./constants");

let connection;

const handleUserInput = (key) => {
  if (key === constant.exitGame) {
    console.log("Good bye!");
    process.exit();
  }
  if (key === constant.moveUp) connection.write("Move: up");
  if (key === constant.moveLeft) connection.write("Move: left");
  if (key === constant.moveDown) connection.write("Move: down");
  if (key === constant.moveRight) connection.write("Move: right");
  if (key === constant.messageOne) connection.write("Say: I'm going to win!");
  if (key === constant.messageTwo) connection.write("Say: You can't beat me!");
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };
