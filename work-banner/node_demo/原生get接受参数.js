//引入http
const http = require('http');
const url = require('url');
const querystring = require('querystring');
//创建处理请求的函数,从而处理响应
function start(request,response) {
    //当前访问路径
    console.log(request.url);
    console.log(url.parse(request.url).query);
    //分离结果 name=five&age=16
    let query = url.parse(request.url).query;
    //交给querystring处理
    let user = querystring.parse(query);
    console.log(user);
    let date = new Date();
    response.write("<h6>"+date+"</h6>");
    //结束请求
    response.end();
}
//用http模块语法创建服务,并手动创建server服务
//将处理请求的函数放入服务中
const server = http.createServer(start);
//手动定义端口号
server.listen(8282);