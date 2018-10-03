//nodejs路由根据不用的访问路径处理不同的业务需求
//引入http
const http = require('http');
const url = require('url');
const fs = require('fs');
//创建处理请求的函数,从而处理响应
function start(request,response) {
    let pathname = url.parse(request.url).pathname;
    switch(pathname){
        case"/student":response.write("this is student");response.end();break;
        case"/teacher":response.write("this is teacher");response.end();break;
        case"/login":let login = fs.readFileSync('./login.html');response.write(login.toString());response.end();break;
        default:response.write("this is default");response.end();break;
    }
    //结束请求
    response.end();
}
//用http模块语法创建服务,并手动创建server服务
//将处理请求的函数放入服务中
const server = http.createServer(start);
//手动定义端口号
server.listen(8181);