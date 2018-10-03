const fs = require('fs');
console.log('开始');

//写操作
fs.writeFile("./one.txt","我要写了222",function (err) {
    if(err){
        console.log('写失败');
    }else{
        console.log('写成功');
    }
});
//flag追加内容
fs.writeFile("./one.txt","我要写了",{flag:"flag"},function (err) {
    if(err){
        console.log('写失败');
    }else{
        console.log('写成功');
    }
});

//异步非阻塞操作
fs.readFile("./one.txt",function (erro,data) {
    if(erro){
        console.log('异常');
    }else{
        console.log(data.toString());
    }
});

//同步阻塞操作
let data = fs.readFileSync("./two.txt");
console.log(data.toString());
console.log('结束');