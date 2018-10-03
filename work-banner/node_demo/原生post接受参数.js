//引入http
const http = require('http');
const url = require('url');
const querystring = require('querystring');
//创建处理请求的函数,从而处理响应
function start(request,response) {
    let alldata = "";
    //异步非阻塞,分别执行
    request.on("data",function (d) {
        console.log(d.toString());
        alldata+=d;
    });
    console.log('alldata =   '+alldata);
    response.write("Hello World");
    //结束请求
    response.end();
}
//用http模块语法创建服务,并手动创建server服务
//将处理请求的函数放入服务中
const server = http.createServer(start);
//手动定义端口号
server.listen(8181);