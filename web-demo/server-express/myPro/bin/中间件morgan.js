//第一步引入express
const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
//第二步 实例化express对象
const app = express();
morgan.format('five', ':userToken :method :url')

//重新定义解析规则
morgan.token('userToken', function(req,res) {
    //记录用户身份信息 req session
    return "用户身份信息"
});

//保存到数据库的函数

let myStream = {
    write:function(logData){
        //保存到数据库里
        console.log(logData,"获取到日志源数据");
    }
};


let log = fs.createWriteStream("log.txt",{flags:"a"});
//express.static()调用关联静态文件
//app.use  将中间件对应的功能关联到指定的服务
app.use(morgan("five",{stream:myStream}));
app.use(express.static(__dirname+"/public",{etag:false,lastModified:false,extensions:["jpg","html"],index:["login.html"]}))

app.get("/find",function (req, res) {
    res.send("Find");
});
app.listen(8181);