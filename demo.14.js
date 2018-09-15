#!/usr/bin/env node
const fs = require('fs');

function readcontent(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject(err);
      resolve(data.toString());
    });
  });
}

readcontent('./public/pages/ym.html')
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
