#!/usr/bin/env node
const http = require('http');
const fs = require('fs');
const path = require('path');

const resolve = _path => {
  return path.resolve(__dirname, _path);
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
  fs.readFile(resolve('./public/index.html'), (err, data) => {
    if (err) throw err;
    res.end(data);
  });
});

server.listen(8080, '0.0.0.0');
