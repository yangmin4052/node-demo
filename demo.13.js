#!/usr/bin/env node
const fs = require('fs');
const file = './public/pages/ym.html';

fs.readFile(file, (err, data) => {
  if (err) throw err;
  const content = data.toString();
  console.log(content);
});
