
/*
fs module provides functions for working with the file system. 
This module allows you to read, write, and manipulate files and directories on your local file system.
*/
var fs = require('fs');

let msg= 'fs module provides functions for working with the file system. This module allows you to read, write, and manipulate files and directories on your local file system.'

fs.writeFile('./textfile.txt', msg, (err) => {
  if (err) throw err;
  console.log('File written successfully!');
});


// To read from the file
fs.readFile('./textfile.txt', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
});