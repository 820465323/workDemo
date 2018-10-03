const koa = require('koa');
const app = new koa();
app.use(async (ctx,next)=> {
   console.log('1111');
   await next();
   console.log('101010100101');
});
app.use(async (ctx,next)=> {
    console.log('2222');
    await next();
    console.log('202020020202');
});
app.use(async (ctx,next)=> {
    console.log('3333')
    await next();
    console.log('303030303030');
});
app.listen(8181);