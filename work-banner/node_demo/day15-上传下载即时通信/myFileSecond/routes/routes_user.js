const express = require('express');
const router = express.Router();
router.get('/user/query',function (request,response) {
    response.send('用户查询操作');
});

router.get('/user/login',function (request,response) {
    response.send('用户登录操作');
});

module.exports = router;