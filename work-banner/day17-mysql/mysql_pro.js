//引入
const mysql = require("mysql");
//mysql配置连接信息
const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"666669",
    database:"demo",
    port:"3306"
});
//连接生效
conn.connect();

//查询
conn.query("SELECT * FROM demo_1 where id = ?",[1],function (err, results, fields) {
    if (err) {
        console.log("查询失败")
    }else{
        console.log(results);
        //console.log(fields);//描述字段信息
    }
});

//添加
/*conn.query("insert into demo_1(name,score,course,datatime)values(?,?,?,?)",["张周旺",78,"语文",new Date()],function (error,result) {
    if (error) {
        console.log("添加失败")
    }else {
        console.log('添加了 =  '+result);
    }
});*/

//添加多条数据
/*
var all = [["张周旺2",99,"数学",new Date()],["张周旺3",99,"数学",new Date()],["张周旺4",99,"数学",new Date()]];
conn.query("insert into demo_1(name,score,course,datatime)values ?",[all],function (error,result) {
    if (error) {
        console.log("添加失败  = "+error)
    }else {
        console.log('添加了 =  '+result);
    }
});*/

//删除
/*
conn.query("delete from demo_1 where id = ?",[12],function (error,result) {
    if (error) {
        console.log(error)
    }else {
        console.log('删除了 =    '+result);
    }
});*/

//修改
conn.query("update demo_1 set name = ? where id = ?",["陶慧雪",13],function (error) {
    if (error) {
        console.log(error);
    }else {
        console.log("修改成功");
    }
});