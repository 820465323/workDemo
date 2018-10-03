//引入
const mysql = require("mysql");
//mysql配置连接信息
const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"666669",
    database:"demo",
    port:"3306",
    connectionLimit:10
});

//连接池自动随机分配一个连接进行表操作
//连接池自动管理连接的释放和返回
/*pool.query("select * from demo_1",function (error,result) {
    if (error) {
        console.log(error);
    }else {
        console.log('查询得到  =  1111'+result);
    }
});
pool.query("select * from demo_1",function (error,result) {
    if (error) {
        console.log(error);
    }else {
        console.log('查询得到  =  2222'+result);
    }
});
pool.query("select * from demo_1",function (error,result) {
    if (error) {
        console.log(error);
    }else {
        console.log('查询得到  =  3333'+result);
    }
});*/

//配置事务管理 保证所有sql一起成功或失败
//从连接池中随机那一个连接,在这个链接下完成所有事务操作
//封装
function tran(sqls,callback) {
pool.getConnection(function (error,conn) {
    if (error) {
        console.log("连接获取失败 =  "+error)
    } else {
        //手动开始事务操作,否则事务自动提交
        conn.beginTransaction(function (error) {
            if (error) {
                console.log("事务配置失败...");
            } else {
                console.log("事务配置成功!");
                var arr = [];
                //循环操作SQL语句
                sqls.forEach(function (sql) {
                    //创建promist对象
                    let pro = new Promise(function (resolve,reject) {
                        conn.query(sql,function (err,result) {
                            if (err) {
                                console.log('sql执行失败')
                            }else {
                                resolve(true);
                            }
                        });
                    });
                    //放入数组内
                    arr.push(pro);
                });
                callback(arr,conn);
            }
        });
    }
});
}

tran(["insert into demo_1 (name,score,course)values('无几天',56,'生物')","delete from demo_1 where id = 10","select name from demo_1"],function (data,conn) {
    Promise.all(data).then(function () {
        conn.commit(function (error) {
            if (error) {
                console.log("提交失败");
            }else {
                console.log("提交成功");
            }
        });
    }).catch(function () {
        conn.rollback(function (error) {
            if (error) {
                console.log("回滚失败");
            }else {
                console.log("回滚成功");
            }
        })
    })
});
