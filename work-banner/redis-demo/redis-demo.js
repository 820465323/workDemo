const redis = require('redis');
//创建客户端
const client = redis.createClient(6379,"192.168.142.137");
client.on("connect",function (err) {
    if (err) {
        console.log("6379失败")
    }else {
        console.log("连入redis成功")
    }
});

client.set("xxx333","xxx222",function (err) {
    if (err) {
        console.log("操作失败")
    }else {
        console.log("操作成功");
        client.expire("xxx333",10000);
    }
});

//hmset  user为键 ｛｝中的内容为值
/*client.hmset("user",{name:"小王",age:18,sex:"男"},function (err) {
    if (err) {
        console.log("失败")
    }else{
        console.log("成功")
    }
});*/

