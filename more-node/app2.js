// Working with readable and writable streams
const fs = require('fs');
const zlib = require('zlib');
// const gzip = zlib.createGzip();
// const readStream = fs.createReadStream('./example.txt', 'utf8');
// const writeStream = fs.createWriteStream('example2.txt.gz');

// readStream.on('data', (chunk)=>{
//     // console.log(chunk);
//     writeStream.write(chunk);
// });

// Pipes and Pipe chaining

// readStream.pipe(writeStream);   //  Pipe

// Pipe Chaining
// readStream.pipe(gzip).pipe(writeStream);

// Pipe chaining reverse
const gunzip = zlib.createGunzip();
const readStream = fs.createReadStream('./example2.txt.gz');
const writeStream = fs.createWriteStream('uncompressed.txt');

readStream.pipe(gunzip).pipe(writeStream);



