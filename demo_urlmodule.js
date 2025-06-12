var http = require('http');

http.Server((req, res) =>{

    const parseUrl = new URL(req.url, `http://${req.headers.host}`);

    const pathname = parseUrl.pathname;
    const name = parseUrl.searchParams.get('name');
    const age = parseUrl.searchParams.get('age');

    console.log(pathname);
    

    res.writeHead(200, {'Content-Type': 'Text/Plain'})
    res.end(`Hello ${name}, i heard you are ${age}`);                                                           

}).listen(8080);