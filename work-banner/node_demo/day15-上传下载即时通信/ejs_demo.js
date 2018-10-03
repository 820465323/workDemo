const express = require("express");
const fs = require("fs");
const ejs = require("ejs");
const app = express();

app.get("/findAllUsers",function (request,response) {
    let users = [{name:"one",age:12},{name:"two",age:12},{name:"three",age:21},{name:'four',age:4}];
    //拿到所有视图模板标签
    let readFileSync = fs.readFileSync("./user.ejs");
    /*console.log('readFileSync   =          '+readFileSync.toString());*/
    let html = ejs.render(readFileSync.toString(),
    {users:users,name:"张周旺"},{debug:true,cache:true,filename:"user.ejs"});
    /*console.log('html   =      '+html);*/
    response.send(html);
});

app.get("/findByIndex",function (request2,response2) {
    let users = [{name:"one",age:12},{name:"two",age:12},{name:"three",age:21},{name:'four',age:4}];
    let index = request2.query.index;
    console.log('index =       '+index);
    let u = users[index];
    console.log('u =         '+u);
    let readFileSync = fs.readFileSync("./u.ejs");
    console.log('readFileSync =          '+readFileSync);
    let html = ejs.render(readFileSync.toString(),{u:u});
    response2.send(html)
});
app.listen(8181);