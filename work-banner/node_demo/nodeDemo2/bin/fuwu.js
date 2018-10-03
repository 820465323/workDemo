const http = require('http');
const luyou = require('../routes/luyou');
http.createServer(function (request,response) {
    luyou(request,response);
    console.log('0000000');
}).listen(8181);