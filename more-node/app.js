const EventEmitter = require('events');
const readline = require('readline');
const fs = require('fs');
/* 

const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1, num2) => {
    console.log(num1 + num2);

});

eventEmitter.emit('tutorial', 1,2);
*/

// ReadLine Module
/**
const rl = readline.createInterface({input : process.stdin,
                          output : process.stdout});
let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2

rl.question(`What is ${num1} + ${num2}? \n`,
    (userInput) => {
        if (userInput.trim() == answer) {
            rl.close()
        } else {
            rl.setPrompt('Incorrect response. Please try again\n');
            rl.prompt();
            rl.on('line', (userInput)=>{
                if (userInput.trim() == answer)
                    rl.close();
                else {
                    rl.setPrompt(`Your answer of ${ userInput } is incorrect, try again \n`);
                    rl.prompt();
                }                    
            })
        }
        
    }
)

rl.on('close', () => {
    console.log('Correct!!!!')
});
**/

// WriteFile
/*
fs.writeFile('Demofile.txt', 'Hello, whats good?', (err)=>{
    if(err)
        console.log(err);
    else {
        console.log('File created');
        fs.readFile('Demofile.txt', 'utf8',(err, file)=>{
            if(err)
                console.log(err);
            else {
                console.log(file);
            }
        })
    }
})
 */

// RenameFile, AppendFile,  and Delete File
/* 
fs.rename('Demofile.txt', 'Demo.txt', (err)=>{
    if(err)
        console.log(err);
    else{
        console.log('File successfully renamed');
    }
})

fs.appendFile('Demo.txt', ' Just wanted to check on you', (err)=>{
    if(err)
        console.log(err);
    else{
        console.log('file updated');
    }
})

fs.unlink('Demo.txt', (err)=>{
    if(err)
        console.log(err);
    else{
        console.log('File successfully deleted!')
    }
})
*/

// Folders

// fs.mkdir('folder', (err) => {
//      //create folder
//     if(err)
//         console.log(err);
//     else{
//         fs.writeFile('./folder/example.txt', '123', (err)=>{
//             if(err)
//                 console.log(err);
//             else{
//                 console.log('File created successfully');
//             }
//         })
//     }
// });

// fs.rmdir('folder', (err)=>{ //delete folder
//     if(err)
//         console.log(err);
//     else{
//         console.log('Folder deleted succesfully');
//     };
// });

// fs.unlink('./folder/example.txt', (err)=> {
//     if(err)
//         console.log(err);
//     else{
//         console.log('file deleted successfully')
//         fs.rmdir('folder', (err)=>{
//             if(err)
//                 console.log(err);
//             else{
//                 console.log('folder deleted successfully');
                
//             }
//         });
//     }
// });

fs.readdir('folder', (err, files)=>{
    if(err)
        console.log(err);
    else{
        console.log(files);
        for(let file of files){
            fs.unlink(`./folder/${file}`, (err)=>{
                if(err)
                console.log(err);
            else{
                console.log('files deleted successfully');
                
            }

            })
        }
    }
        
})
