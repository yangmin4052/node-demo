#!/usr/bin/env node
const http = require('http');
const responsedata = require('./responsedata');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
    responsedata('./public/index.html', res);
  }
  if (req.url === '/ym') {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
    responsedata('./public/pages/ym.html', res);
  }
  if (req.url === '/zrj') {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
    responsedata('./public/pages/zrj.html', res);
  }
});

server.listen(8080, '0.0.0.0');

