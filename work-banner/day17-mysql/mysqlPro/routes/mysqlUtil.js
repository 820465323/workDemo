//引入
const mysql = require("mysql");
//mysql配置连接信息
//global全局
global.pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"666669",
    database:"demo",
    port:"3306",
    connectionLimit:10
});
global.tran = tran;
function tran(sqls, callback) {
    pool.getConnection(function (error, conn) {
        if (error) {
            console.log("连接获取失败 =  " + error)
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
                        //动态传值
                        let pro = new Promise(function (resolve, reject) {
                            conn.query(sql.sql,sql.params, function (err, result) {
                                if (err) {
                                    console.log('sql执行失败')
                                } else {
                                    resolve(true);
                                }
                            });
                        });
                        //放入数组内
                        arr.push(pro);
                    });
                    Promise.all(arr).then(function () {
                        conn.commit(function (error) {
                            if (error) {
                                callback("提交失败");
                            } else {
                                callback("提交成功");
                            }
                        });
                    }).catch(function () {
                        conn.rollback(function (error) {
                            if (error) {
                                callback("执行失败");
                            } else {
                                callback("执行成功");
                            }
                        })
                    })
                }
            });
        }
    });
}

