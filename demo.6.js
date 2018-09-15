#!/usr/bin/env node
const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url);
});

server.listen(8080, '0.0.0.0');
