//现加载express配置信息
const express = require('express');
//引出一个附有所有express的方法和属性的引用
const app = express();
//第一个参数为路由规则,第二个为路由规则对应的业务逻辑
app.get('/index',function (request,response) {
    request.method();
    request.url();
    response.send();
    //接收get请求传参,直接转换为JSON对象
    console.log(request.query);
});

//启动服务端口号
app.listen(8181);