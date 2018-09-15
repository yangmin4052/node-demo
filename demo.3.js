#!/usr/bin/env node
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
  fs.writeFile('./public/js/index.js', '我要进js', err => {
    if (err) throw err;
    res.end('写了个index.js');
  });
});

server.listen(8080, '0.0.0.0');
