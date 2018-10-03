//第一步引入express
const express = require("express");
//第二步 实例化express对象
const app = express();

//express.static()调用关联静态文件
//app.use  将中间件对应的功能关联到指定的服务
app.use(express.static(__dirname+"/public",{etag:false,lastModified:false,extensions:["jpg","html"],index:["login.html"]}))
app.get("/find",function (req, res) {
    res.send("Find");
})
app.listen(8181)