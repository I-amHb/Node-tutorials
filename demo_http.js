var http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello Node');
    res.end();
}).listen(8080);