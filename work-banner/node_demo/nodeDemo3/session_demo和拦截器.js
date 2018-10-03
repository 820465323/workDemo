const express = require('express');
const session = require('express-session');
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
    cookie:{maxAge:1000000}
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
    res2.send('购买完毕');
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
