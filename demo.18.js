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

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
    read('./public/index.html')
      .then(data => {
        res.end(data);
      })
      .catch(err => {
        console.log(err);
      });
  }
});

server.listen(8080, '0.0.0.0');
