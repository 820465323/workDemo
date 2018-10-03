//引入
const mongoose = require("mongoose");
//建立连接
mongoose.connect("mongodb://localhost:27017/admins",{server:{poolSize:5}});
//连接生效
const conn = mongoose.connection;
//监听连接是否成功连入服务
conn.on("open",function () {
    console.log("连接成功")
})
conn.on("error",function () {
    console.log("连接失败")
})
//需要生成可以操作数据库表的对象 两步
//生成数据骨架
let s1 = mongoose.Schema({
    name:String,
    age:Number
},{collection:"admin",versionKey:false,strict:false});
//利用骨架生成操作数据库对象 model
let admin = mongoose.model("admin",s1);

//查询操作
admin.find({},function (err, data) {
    if (err) {
        console.log("查询报错")
    }else{
        console.log(data,"1111");
    }
})
admin.find({},function (err, data) {
    if (err) {
        console.log("查询报错")
    }else{
        console.log(data,"2222");
    }
})
admin.find({},function (err, data) {
    if (err) {
        console.log("查询报错")
    }else{
        console.log(data,"3333");
    }
})
//范围匹配
/*admin.find({age:{$gt:18}},function (err, data) {
 if (err) {
 console.log("查询报错")
 }else{
 console.log(data);
 }
 })*/
//单挑数据查询
/*admin.findOne({name:"xxx"},function (err, data) {
    if (err) {
        console.log("查询报错")
    }else{
        console.log(data)
    }
})*/
/*admin.findById("5b835f2b730bf916bc17343a",function (err, data) {
    if (err) {
        console.log("查询报错")
    }else{
        console.log(data.name)
        console.log(data.age)
        console.log(data.sex)
    }
})*/
//分页查询
/*admin.find({},function (err, data) {
    if (err) {
        console.log("查询报错")
    }else{
        console.log(data)
    }
}).skip(0).limit(3).sort({age:-1})*/

//插入操作  insert(不能用)  == save == create
/*new admin({name:"111",age:20,sex:"男"}).save(function (err) {
    if (err) {
        console.log("保存失败")
    }else {
        console.log("保存成功")
    }
})*/
/*admin.create*/

//删除
/*admin.remove({name:"111"},function (err) {
    if (err) {
        console.log("删除失败")
    }else{
        console.log("删除成功")
    }
})*/

//修改操作
/*admin.update({_id:"5b8358d2e8ab398ade5b7721"},{age:200,sex:"男"},{upsert:false,multi:false},function (err) {
    if (err) {
        console.log("修改失败")
    }else{
        console.log("修改成功")
    }
})*/






