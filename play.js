const { conn, encoding, handleData } = require("./client");

const connect = function () {
  conn;
  encoding;
  conn.on("connect", function () {
    console.log("Successfully connected to game server!");
    conn.write("Name: 🌟⭐️🌟");
  });
  handleData;
};

console.log("Connecting ...");
connect();
