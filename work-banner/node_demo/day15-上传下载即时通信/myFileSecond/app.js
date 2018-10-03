//配置中间件
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const cookie = require('cookie-parser');
const body = require('body-parser');
const user = require('./routes/routes_user');
const app = express();

//其他中间件
app.use(morgan());
app.use(express.static(__dirname+'./public'));
app.use(body.urlencoded());
app.use(body.json());
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
    cookie:{maxAge:1000*60*10}
}));

//路由
app.use(user);
module.exports = app;