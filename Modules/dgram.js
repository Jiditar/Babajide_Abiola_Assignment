
/*
 dgram module provides an implementation of UDP (User Datagram Protocol) sockets. 
 UDP is a simple, connectionless protocol that operates on top of IP (Internet Protocol). 
 It is often used in scenarios where low latency is important, 
 such as real-time multimedia streaming or online gaming.
*/

const dgram = require('dgram');
const server = dgram.createSocket('udp4');
server.bind(1234, '127.0.0.1');
const message = Buffer.from('Hello, world!');
const client = dgram.createSocket('udp4');

client.send(message, 1234, '127.0.0.1', (err) => {
  client.close();
});
server.on('message', (msg, rinfo) => {
    console.log(`Received message from ${rinfo.address}:${rinfo.port}: ${msg}`);
  });
  server.close();
  client.close();
    