var express = require('express');
var router = express.Router();

/* GET home page. */
//分页查询所有
router.all('/', function(req, res, next) {
    goods.find({},function (err, data) {
        res.send(data);
    }).skip(0).limit(10).sort({_id:1});
});
router.all('/selectName',function (req, res, next) {
   goods.find({_id:req.query.id},function (err, data) {
       res.send(data);
   })
});
//添加
router.all('/add', function(req, res, next) {
    new goods({name:"zzwzzw2"}).save(function (err, data) {
        res.send(data);
    });
});
//删除
router.all('/delete/delUsername',function (req, res, next) {
    goods.remove({name:"zzwzzw"},function (err, data) {
        res.send(data);
    })
});
//修改
router.all('/update',function (req, res, next) {
    goods.update({name:"zzwzzw2"},{name:"张周旺"},{upsert:false,multi:false},function (error, data) {
        res.send(data);
    })

});
module.exports = router;
