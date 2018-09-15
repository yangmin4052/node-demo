#!/usr/bin/env node
const http = require('http');

const server = http.createServer((req, res) => {
  // req:request, res:response
  res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
  res.end('this is demo.1.js');
});

server.listen(8080, '0.0.0.0');
