#!/usr/bin/env node
const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.setHeader('Content-Type', 'text/html;charset=UTF-8');
  res.write('<h1>write</h1>')
  res.write('<h1>write</h1>')
  res.write('<h1>write</h1>')
  res.write('<h1>write</h1>')
  res.write('<h1>write</h1>')
  res.write('<h1>write</h1>')
  res.end('<h1>end</h1>');
});

server.listen(8080, '0.0.0.0');
