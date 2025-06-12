var http = require('http');
var fs = require('fs');
var url = require('url');

/*
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qData = q.query;
console.log(qData);
console.log(qData.month);
*/

http.createServer((req, res) =>{
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;

    fs.readFile(filename, (err, data) => {
        if(err){
            res.writeHead(404, {'content-type': 'text/html'});
            return res.end('404 Not Found');
        };
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(8080);