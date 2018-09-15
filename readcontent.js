const fs = require('fs');

module.exports = function readcontent(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject(err);
      resolve(data.toString());
    });
  });
};
