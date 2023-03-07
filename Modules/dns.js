/*
the dns module provides functions for working with the Domain Name System (DNS). 
The DNS is a hierarchical naming system that maps human-readable domain names to IP addresses, 
which are used to identify and communicate with network devices.
*/

const dns = require('dns');

dns.lookup('www.example.com', (err, address, family) => {
    console.log(`IP address: ${address}`);
  });
  
  