const http = require('http');
const url = require('url');
const querystring = require('querystring');
function start(request,response) {
    console.log('原生页面接收值  =  '+request.url);
    //页面拼接值,先将?/分离
    //query可以去除/?
    let query = url.parse(request.url,true).query;
    //query去除后的结果
    console.log('经过query去除后  =  ',query);
    //再经过querystring转化成为可操作的json对象

    //第一种转换为JSON字符串的方式
    /*let number = querystring.parse(query);
    console.log('经过querystring转换后 =  ',number);*/

    //第二种转换为JSON字符串的方式,在将地址转换为字符串的同时传入true,直接将字符串变为JSON字符串
    response.write("");
    response.end();
};
const server = http.createServer(start);
server.listen(8181);