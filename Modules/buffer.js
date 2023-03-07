/*In Node.js, a buffer is a temporary holding spot for binary data. 
It is similar to an array of integers but is designed to handle raw binary data. 
Buffers are useful for working with data that must be sent or 
received in binary format, such as files, network streams, or cryptographic data.*/
const str = 'hello world';
const buf = Buffer.from(str, 'utf8');

console.log(buf);