// the tls module provides an implementation of the Transport Layer Security (TLS) and 
//Secure Sockets Layer (SSL) protocols, which are used to secure network communications over the internet. 

const tls = require('tls');

const options = {
    host: 'example.com',
    port: 443
  };
  
  const client = tls.connect(options, () => {
    console.log('Connected to server!');
    client.write('Hello, server!');
  });
  
  client.on('data', (data) => {
    console.log(`Received ${data.length} bytes of data: ${data}`);
    client.end();
  });
  
  client.on('end', () => {
    console.log('Connection closed by server.');
  });
  
