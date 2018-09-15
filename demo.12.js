#!/usr/bin/env node
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  if (req.url ==='/favicon.ico') {
    return;
  }
  var userurl = req.url;
  res.setHeader('Content-Type', 'text/html;charset=UTF-8');

  if (userurl.substr(0, 9) === '/student/') {
    const studentid = userurl.substr(9);
    console.log(studentid);
    if (/\d{10}/.test(studentid)) {
      res.end('学生id ' + studentid);
    } else {
      res.end('学生id有误');
    }
  } else if (userurl.substr(0, 9) === '/teacher/') {
    const teacherid = userurl.substr(9);
    console.log(teacherid);

    if (/\d{10}/.test(teacherid)) {
      res.end('老师id ' + teacherid);
    } else {
      res.end('老师id有误');
    }
  }
});

server.listen(8080, '0.0.0.0');
