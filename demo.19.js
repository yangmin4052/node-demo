#!/usr/bin/env node
const http = require('http');
const fs = require('fs');

function read(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

async function responsedata(file, res) {
  res.end(await read(file));
}

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
    responsedata('./public/index.html', res);
  }
  if (req.url === '/ym') {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
    responsedata('./public/pages/ym.html', res);
  }
});

server.listen(8080, '0.0.0.0');
