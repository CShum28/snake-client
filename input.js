const {
  moveUp,
  moveDown,
  moveLeft,
  moveRight,
  exitGame,
} = require("./constants");

let connection;

const handleUserInput = (key) => {
  if (key === exitGame) {
    console.log("Good bye!");
    process.exit();
  }
  if (key === moveUp) connection.write("Move: up");
  if (key === moveLeft) connection.write("Move: left");
  if (key === moveDown) connection.write("Move: down");
  if (key === moveRight) connection.write("Move: right");
  if (key === "b") connection.write("Say: I'm going to win!");
  if (key === "n") connection.write("Say: You can't beat me!");
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
