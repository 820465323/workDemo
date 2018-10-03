/**
 * Created by 12526 on 2018/8/27.
 */
//引入
const mongoose = require("mongoose");
//建立连接
mongoose.connect("mongodb://localhost:27017/admins",{server:{poolSize:5}});
//连接生效
const conn = mongoose.connection;
//监听连接是否成功连入服务
conn.on("open",function () {
    console.log("连接成功")
});
conn.on("error",function () {
    console.log("连接失败")
});
//需要生成可以操作数据库表的对象 两步
//生成数据骨架
let goods = mongoose.Schema({
},{collection:"goods",versionKey:false,strict:false});
//利用骨架生成操作数据库对象 model
global.goods = mongoose.model("goods",goods);
console.log(goods);

