//第一步引入express
const express = require("express");
const body = require("body-parser");
const request = require("request");
//第二步 实例化express对象
const app = express();

//express.static()调用关联静态文件
//app.use  将中间件对应的功能关联到指定的服务
app.use(express.static(__dirname+"/public",{etag:false,lastModified:false,extensions:["jpg","html"],index:["login.html"]}))
app.use(body.urlencoded());//普通post传参
app.use(body.json());//解决get请求直接提交json对象 没有在地址栏中
app.post("/reg",function (req, res) {
    console.log(req.body);
    res.send("REG");
});

app.get("/find",function (req, res) {
    console.log('req.url  =  ',req.url);
    console.log('req.body   =   ',req.body);
    res.send(req.body);
    /*let allData = "";
    req.on("data",function (d) {
        allData += d;
    })
    req.on("end",function () {
        console.log(allData);
        res.send("这是find的响应");
    })*/

})

app.get("/pay",function (req, res) {
   /* request({
        url:"http://localhost:8181/find",
        method:"get",
        body:{name:"five",age:19},
        json:true
    },function (reqq, ress,body) {
        console.log(body);
        //业务逻辑加工body


        res.send()
    })*/
})
app.listen(8181)