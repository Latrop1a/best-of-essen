const fs = require('fs');
const server = require('http').createServer();
const url = require('url');

server.on('request', async (req, res) => {
  const request = await req.url;
  if
  console.log(request);
  res.end('this is the server');
});

server.listen(8000, '127.0.0.1', () => {
  console.log('listening on port 8000');
});
