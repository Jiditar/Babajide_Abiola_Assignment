const http = require("http");
const getnames = require("./names.js");

const PORT = 8681;

// mongoose.connect(process.env.MONGODB_URI).then(() => {
//   console.log("Server successfully connected to database");
// });

const server = http.createServer((req, res) => {
    getnames(req, res);
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



// var http = require('http');
// var urls = require('url');
// var names = require('./names');

// http.createServer(function (request, response) {    
//     response.writeHead(200, {'Content-Type': 'text/plain'});    

//     // var _url = urls.parse('https://www.gtbank.com:9090/new?acc=12122565536;bal=200000000000', false);
//     // var _protocol = _url.protocol;
//     // var _hostname = _url.hostname;
//     // var _host = _url.host;
//     // var _path = _url.pathname;
//     // var _search = _url.search;
//     // response.end(`Hello World\n The GTBank protocol name = ${_protocol} \n 
//     // The GTBank host name = ${_hostname} and host is ${_host} \n The GTBank URL path is ${_path} \n
//     // The GTBank query string = ${_search}`);

//     router(request, response);
// }).listen(8081);
// console.log('Server running at http://127.0.0.1:8081/');