// module http
const http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>ini skilvul</h1>");
    res.write(req.url);
    res.end();
  })
  .listen(8000);

// timer
// const settimeout = require('timers')
// const myFunction = (arg) => {
//   console.log(`arg was => ${arg}`);
// };
// setTimeout(myFunction, 5000, "tes");

// import { readFileSync } from "fs";
// const fs = require("fs");
const express = require('express')
const app = express()
const port = 8000

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

// POST method route
app.post('/', (req, res) => {
  res.send('POST request to the homepage')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})