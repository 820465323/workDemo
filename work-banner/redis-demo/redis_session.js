const express = require('express');
const session = require('express-session');
//将session与connect-redis关联在一起进行实例化操作
const connect = require("connect-redis")(session);
const app = express();
app.use(express.static(__dirname+'/public'));
//配置session当前属性
app.use(session({
    //初始化(是否保存刚刚初始化的session对象到内存中)
    saveUninitialized:false,
    //是否定期更新保存在内存当中的session对象
    resave:false,
    //字符串密钥 加密session
    secret:'zzw',
    //每一次操作是否重新重置session存活时间
    rolling:false,
    //设置session存活时间
    cookie:{maxAge:1000*60*10},
    //session持久化开始-------先保存到redis的配置
    store:new connect({
    //保存的配置地址
        host:"192.168.142.137",
        port:6379,
        //ttl:设置session在redis中的存活时间
        ttl:60*10
    })
}));

//创建中间件(代表拦截器)
///token/*拦截所有一级路径为token的路由
app.use('/token/*',function (request,response,next) {
    if (request.session.user) {
        console.log('身份合法');
        next();
    }else {
        //合法则将当前请求处理到路由内
        console.log('身份不合法');
        response.redirect('../login.html')
    }
});

app.post('/loginSession',function (req,res) {
    //session存储在服务器中
    req.session.user = {name:'zzw',age:21};
    res.send('登录session');
});

app.get('/token/buySession',function (req2,res2) {
    //取session
    res2.send(req2.session.user);
    console.log('购买完毕');
});
app.get('/token/orderSession',function (req3,res3) {
    res3.send('订单完成');
});

app.get('/logout',function (req4,res4) {
    req4.session.destroy();
    res4.send('退出成功');
});
/*app.get('/setSession',function (req,res) {
 //session存储在服务器中
 req.session.user = {name:'zzw',age:21};
 res.send('保存完毕');
 });

 app.get('/getSession',function (req2,res2) {
 //取session
 res2.send(req2.session.user);
 });

 app.get('/delSession',function (req3,res3) {
 req3.session.destroy();
 res3.send('销毁成功');
 });*/
app.listen(8181);
