//引入http
const http = require('http');
//创建处理请求的函数,从而处理响应
function start(request,response) {
    //当前访问路径
    console.log(request.url);
    //请求类型
    console.log(request.method);
    console.log(request.headers);
    console.log('接收到了请求');
    let date = new Date();
    response.write("<h6>"+date+"</h6>");
    //结束请求
    response.end();
}
//用http模块语法创建服务,并手动创建server服务
//将处理请求的函数放入服务中
const server = http.createServer(start);
//手动定义端口号
server.listen(8181);