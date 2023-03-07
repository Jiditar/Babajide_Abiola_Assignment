
/*
 the readline module provides an interface for reading lines of input from a readable stream 
 (such as process.stdin) and writing lines of output to a writable stream (such as process.stdout)
*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

    rl.question('What is your name? ', (name) => {
    console.log(`Hello, ${name}!`);
    rl.close();
  });
  