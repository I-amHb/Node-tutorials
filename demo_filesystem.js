// File System

var http = require('http');
var fs = require('fs');
const { error } = require('console');


http.createServer((req, res) => {

    // Method that reads the content of demofile1.html
    // fs.readFile('demofile.html', (err, data) => {
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write(data);
    //     res.end()
    // });

    // fs.appendFile Method appends specified content to a file.
    // If the file does not exist, the file will be created:
    // fs.appendFile('mynewfile1.txt', 
    //     ' wait, i would like to append this text to the end of the file. like today if you dont mind ',
    //      (err) => {
    //     if (err) throw err;
    //     console.log('Saved!');

    // });


    // fs.open method takes takes a "Flag" as 2nd argument, if the flag is "w" for "writing",
    // the specified file is opened for writing. if the doesnt exist, an empty file is created
    // fs.open('mynewfile2.txt', 'w', (err, file) => {
    //     if (err) throw err;
    //     console.log('Saved!');

    // });

    // The fs.writeFile() method replaces the specified file and content if it exists. 
    // If the file does not exist, a new file, containing the specified content, will be created:
    // fs.writeFile('mynewfile3.txt', ' This is my text.', (err) => {
    //     if (err) throw err;
    //     console.log('Replaced!');

    // })

    //The fs.unlink() method deletes the specified file:
    // fs.unlink('mynewfile3.html', (err) => {
    //     if (err) throw err;
    //     console.log('File Deleted!');

    // })

    // 
    fs.rename('mynewfile1.txt', 'myrenamedfile.txt', (err) => {
        if(err) throw err;
        console.log('File Renamed!');
        

    });
    

}).listen(8080);