//第一步引入express
const express = require("express");
//第二步 实例化express对象
const app = express();

//定义路由  get请求类型 只允许我get请求访问/index
app.get("/index",function (req, res) {
    //express中还可以继续使用node原来的语法
    console.log(req.url);
    console.log(req.method);
    //还提供了一些新的语法
    /*res.write({name:"five",age:18});
    res.end()*/
    //接收参数  req.query 直接解析成json
    console.log(req.query);
    res.send("你好") //res.write() res.end()
})

app.get("/f(in)?d",function (req,res) {
    res.send("This is Find")
})

app.post("/login",function (req, res) {
    let allData = "";
    req.on("data",function (data) {
        allData += data;
    })
    req.on("end",function () {
        res.send("this is login")
    })
})
//RESTFUL
app.route("/goods").get(function (req, res) {
    console.log(req.query);
    res.send("查询方法")
}).post(function (req, res) {
    res.send("保存方法")
}).put(function (req, res) {
    res.send("修改方法")
}).delete(function (req, res) {
    res.send("删除方法")
})

/*app.get("/goods/:id?",function (req, res) {
    console.log(req.params.id)
    res.send("Find")
})

app.post("/goods",function (req, res) {
    res.send("Save")
})

app.put("/goods/:id?",function (req, res) {
    res.send("Update")
})

app.delete("/goods/:id?",function (req, res) {
    res.send("Delete")
})*/
//直接启动服务
app.listen(8181)