#!/usr/bin/env node
const http = require('http');
const responsedata = require('./responsedata');

const server = http.createServer((req, res) => {
  if (new RegExp('^/ym/?').test(req.url)) {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
    responsedata('./public/pages/ym.html', res);
  }
  if (new RegExp('^/zrj/?$').test(req.url)) {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
    responsedata('./public/pages/zrj.html', res);
  }
  if (new RegExp('^/$').test(req.url)) {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
    responsedata('./public/index.html', res);
  }
});

server.listen(8080, '0.0.0.0');
