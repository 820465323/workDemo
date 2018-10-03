const http = require('http');
const url = require('url');
const querystring = require('querystring');
const fs = require('fs');
function start(request,response) {
    let query = url.parse(request.url,true).pathname;
    let parse = querystring.parse(query);
    console.log(parse);
    switch (request.url){
        //通过地址栏访问获取
        case "/login":let login = fs.readFileSync("./server-demo/server-post.html");response.write("这是yifu");response.end();break;
        case "/xiezi":response.write("这是xiezi");response.end();break;
        case "/wazi":response.write("这是wazi");response.end();break;
        case "/duanxiu":response.write("这是duanxiu");response.end();break;
    }
}

const server = http.createServer(start);
server.listen(8181);