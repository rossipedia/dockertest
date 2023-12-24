const port = +process.env.PORT || 4000;
require('http').createServer((_, res) => {
  res.writeHead(200, { 'content-type': 'application/json' });
  res.end(JSON.stringify({msg: 'hello world'}));
}).listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
