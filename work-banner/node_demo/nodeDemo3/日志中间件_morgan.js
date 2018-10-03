//第一步引入express
const express = require("express");
//引入margan管理日志
const morgan = require('morgan');
const fs = require('fs');
morgan.format('mm',':myname  :method :url');
//第二步 实例化express对象
const app = express();
//重新定义解析规则
morgan.token('myname', function(request2,response2){
    //记录用户身份信息
    return 'logData用户身份信息';
});

 let myStream = {
     write:function (logData) {
         //保存到数据库的函数
            console.log(logData,'获取到了日志信息');
     }
 };
//指定存储的txt文件
let log = fs.createWriteStream('./diary.txt',{flags:'a'});
//express.static()调用关联静态文件
//app.use  将中间件对应的功能关联到指定的服务
app.use(morgan('mm',{stream:myStream}));

app.use(express.static(__dirname+"/public",{etag:true,lastModified:true,extensions:["jpg","html"],index:["login.html"]}))
app.get("/find",function (req, res) {
    res.send("Find");
    console.log('/find');
});

app.listen(8181);