#!/usr/bin/env node
const readcontent = require('./readcontent');

readcontent('./public/pages/ym.html')
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
