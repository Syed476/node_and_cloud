"use strict"
const port = 3000
const http = require("http")
const httpStatus = require("http-status-codes")
const app = http.createServer((request, response) => {
  console.log("Received an incoming request!")
  response.writeHead(httpStatus.OK, {
    "Content-Type": "text/html"
  });
  let responseMessage = "<h1 Hello, Universe!</h1>";
  response.write(responseMessage);
  response.end();
  response.log('Sent a response : ${responseMessage}');
});