const fs = require('fs');

function read(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

module.exports=async function responsedata(file, res) {
  res.end(await read(file));
}