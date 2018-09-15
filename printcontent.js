const fs = require('fs');

function readcontent(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject(err);
      resolve(data.toString());
    });
  });
};

module.exports = async function printcontent(file) {
  const content = await readcontent(file);
  console.log('abc');
  console.log(content);
  console.log('def');
}
