var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  pool.query("select * from demo_1",function (error,result) {
      if (error) {
          console.log("sql执行失败")
      }else {
          console.log("sql执行成功");
          console.log(result);
          res.send(result);
      }
  });
});

//查询
/*router.get('/tran', function(req, res, next) {
  //动态sql
    var sqls = [
        {
          sql:"delete from demo_1 where id = ?",
            params:[30]},
        {
          sql:"select name from demo_1 where id = ?",
            params:[1]}];
    tran(sqls,function (result) {
        if(result){
          //返回至页面
          res.send(result);
        }
    });
});*/
//添加
router.get('/tran',function (req, res, next) {
    //放置动态sql
    var sqls = [
        {
            sql:"insert into demo_1 (name,score,course)values(?,?,?)",
            params:["zzwzzw",50,"物理"]
        },
                ];
        tran(sqls,function (result) {
        if(result){
            res.send(result);
        }
    })
});
module.exports = router;
