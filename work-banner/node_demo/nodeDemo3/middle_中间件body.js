//第一步引入express
const express = require("express");
const body = require("body-parser");
const request = require('request');
//第二步 实例化express对象
const app = express();

//express.static()调用关联静态文件
//app.use  将中间件对应的功能关联到指定的服务
app.use(express.static(__dirname+"/public",{etag:true,lastModified:true,extensions:["jpg","html"],index:["login.html"]}));
//配置传统post请求参数
app.use(body.urlencoded());
//配置get请求直接JSON对象,没有在地址栏中
app.use(body.json());
app.get("/find",function (request,response) {
    console.log('url =  '+request.url);
    console.log('query =  '+request.queryl);
    console.log('body =   '+request.body);
    response.send("find");

    /*let addData = '';
    request.on('data',function (da) {
        addData += da;
    });
    request.on('end',function () {
        console.log('addData =   '+addData);
    });*/
});

//支付
app.get('/pay',function (req,res) {
   /* request(
        {
            url:'http://localhost:8181/find',
            method:'get',
            body:{name:'zzw',age:21},
            json:true
        },
        function(request,response,body){
            console.log('find = '+body);
            res.send();
        }
    );*/
});

app.listen(8181);