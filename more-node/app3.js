// Serving static files with HTTP and File system modules
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const readStream = fs.createReadStream('./static/example.png');
    res.writeHead(200, { 'Content-type': 'image/png' });
    readStream.pipe(res);
}).listen(3500);