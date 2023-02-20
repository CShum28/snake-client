let connection;

const handleUserInput = (key) => {
  if (key === "\u0003") {
    console.log("Good bye!");
    process.exit();
  }
  if (key === "w") connection.write("Move: up");
  if (key === "a") connection.write("Move: left");
  if (key === "s") connection.write("Move: down");
  if (key === "d") connection.write("Move: right");
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
