const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.end("<h1>Hi</h1>");
});

server.listen(9000, () => {
  console.log("server is up and working on port 9000");
});
