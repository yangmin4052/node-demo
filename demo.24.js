#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const http = require('http');
const mime = require('./public/json/mime.json');

const server = http.createServer((req, res) => {
  console.log(req.url);
  let reqURL = req.url;
  if (reqURL === '/favicon.ico') {
    return;
  }
  if (reqURL === '/robots.txt') {
    return;
  }
  if (reqURL.indexOf('.')==-1 ) {
    reqURL = '/index.html';
  }
  const extname = path.extname(reqURL);
  const fileURL = './public' + path.normalize(reqURL);
  res.writeHead(200, { 'Content-Type': mime[extname] || 'text/plane' });
  fs.readFile(fileURL, function(err, data) {
    if (err) {
      res.end('404');
    }
    res.end(data);
  });
});

server.listen(8080, '0.0.0.0');
