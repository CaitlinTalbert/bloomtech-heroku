require("dotenv").config();

const PORT = process.env.PORT || 9000;

const express = require("express");
const cors = require("cors");

const server = express();

server.use(express.json());
server.use(cors());

server.get("/api/hello", (req, res) => {
  res.json({
    message: "api is working",
  });
});

// server.get("/", (req, res) => {
//   res.end("<h1>Hi</h1>");
// });
server.use("*", (req, res) => {
  res.send(`<h1>hello</h1>`);
});

server.use((err, req, res, next) => {
  //eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

server.listen(PORT, () => {
  console.log(process.env.MY_ENV);
  console.log(
    `server is up and working on port ${PORT}, user is ${process.env.USER}`
  );
});
