const koa = require('koa');
//实例化
const app = new koa();
app.use(function* () {
    //暂定异步操作
    yield
    this.body = "hello word!";
});

app.listen(8181);