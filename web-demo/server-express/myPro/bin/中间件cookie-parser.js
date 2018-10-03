const express = require('express');
const cookie = require('cookie-parser');
const app = express();
app.use(cookie());

app.get('/setCookie',function (req,res) {
        //浏览器存储cookie
        //存储key value
        res.cookie('name',{name:"zzw",age:10},{maxAge:1000*60*2});
        res.send('保存完毕');
});

app.get('/getCookie',function (req2,res2) {
        //获取cookie
        let name = req2.cookies.name;
        res2.send(name);
});

app.get('/delCookie',function (req3,res3) {
        //删除cookie(从浏览器上)
        res3.clearCookie('name');
        //删除后要结束响应
        res3.send('删除成功');
});
app.listen(8181);
