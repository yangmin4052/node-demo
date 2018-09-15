#!/usr/bin/env node
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  console.log(req.url);
  const parsedUrl = url.parse(req.url, true);
  console.log(parsedUrl.pathname);
  const queryObj = parsedUrl.query;
  console.log(queryObj.name);
  console.log(queryObj.age);
  res.setHeader('Content-Type', 'text/html;charset=UTF-8');
  res.write('<h1>name ' + queryObj.name + '</h1>');
  res.write('<h1>age ' + queryObj.age + '</h1>');
  res.end('<h1>end</h1>');
});

server.listen(8080, '0.0.0.0');
