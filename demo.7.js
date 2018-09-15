#!/usr/bin/env node
const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
  res.end('<h1>learn http</h1>');
});

server.listen(8080, '0.0.0.0');
