var http = require('http');
var dt   = require('./myFirstModule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello world!');
}).listen(8080);
