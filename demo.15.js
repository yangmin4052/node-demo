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

async function printcontent(file) {
  const content = await readcontent(file);
  console.log(content);
}

console.log('asdfasdfdsafdsa');
printcontent('./public/pages/ym.html');
console.log('asdfasdfdsafdsa');
printcontent('./public/pages/zrj.html');
printcontent('./public/pages/ym.html');
