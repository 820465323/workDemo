const cluster = require('cluster');
const length = require('os').cpus().length;
const http = require('http');
console.log('当前的进程id  =   '+process.pid);
http.createServer(function (request,response) {
    console.log('###########  =   '+process.pid);
    response.write('hello~');
    response.end();
}).listen(8181);