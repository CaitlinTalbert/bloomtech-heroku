require("dotenv").config();

const PORT = process.env.PORT || 9000;

const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.end("<h1>Hi</h1>");
});

server.listen(PORT, () => {
  console.log(process.env.MY_ENV);
  console.log(
    `server is up and working on port ${PORT}, user is ${process.env.USER}`
  );
});
