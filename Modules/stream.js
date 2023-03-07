


//Stream: To handle streaming data

const stream = require('stream');

const fs = require('fs');
const readableStream = fs.createReadStream('jide.txt');

readableStream.on('readable', () => {
    let chunk;
    while ((chunk = readableStream.read()) !== null) {
      console.log(`Received ${chunk.length} bytes of data.`);
    }
  });
  