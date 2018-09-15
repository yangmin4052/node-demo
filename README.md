http 模块

```node
http.createServer((req, res) => {
  req.url;

  res.writeHead();
  res.write();
  res.end();
});
```

fs 模块

```node
fs.readFile('./public/pages/ym.html', (err, data) => {
  if (err) throw err;
  console.log(data);
});
fs.writeFile('./public/js/index.js', 'js里的内容', err => {
  if (err) throw err;
  console.log('写了个index.js');
});
```

path 模块

```node
path.resolve(__dirname, _path);
path.join(__dirname, _path);
```

url 模块

```node
url.parse(req.url, true);
```
