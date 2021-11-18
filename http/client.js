const http = require('http');

const options = {
  hostname: '127.0.0.1',
  port: 3000,
  path: '/',
  method: 'GET'
};

const req = http.request(options, function (res) {
  console.log('STATUS: ' + res.statusCode);
});

req.on('error', function (e) {
  console.log('problem with request: ' + e.message);
});

req.end();
