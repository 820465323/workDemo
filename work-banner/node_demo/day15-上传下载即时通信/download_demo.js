const express = require('express');
const app = express();
app.get('/down',function (request,response) {
    //定位到需要下载的图片路径,异步非阻塞
    response.download(path.join(__dirname,'页面原型--购物车.png'),'new购物车.png',function (erreo) {
        if(error){
            console.log('下载错误');
        }else{
            console.log('下载成功');
        }
    });
});
app.listen(8181);