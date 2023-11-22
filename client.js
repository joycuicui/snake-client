const net = require("net");

// const connect = function () {
//   const conn = net.createConnection({
//     host: "165.227.47.243",
//     port: 50541,
//   });

//   conn.setEncoding("utf8");

//   conn.on("data", (message) => {
//     console.log(message);
//   });

//   return conn;
// };

const conn = net.createConnection({
  host: "165.227.47.243",
  port: 50541,
});

const encoding = conn.setEncoding("utf8");

const handleData = conn.on("data", (message) => {
  console.log(message);
});

module.exports = { conn, encoding, handleData };
