const http = require('http');

const port = 3000;

const server = http.createServer();

server.on('request',(req, res) => {
  const clientIP = req.connection.remoteAddress;
  console.log('Client IP: ' + clientIP);

  res.writeHead(200, 'OK');
  res.write('OK');
  res.end();
});

  server.listen(port, () => console.log('Start HTTP on port ' + port));
