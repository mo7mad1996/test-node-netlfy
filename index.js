import express from "express";

const server = express();

server.listen(3000);

server.get("/", (req, res) =>
  res.send(`node: ${process.version},<br /> it's working!!`)
);
