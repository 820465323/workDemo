const fs = require('fs');
console.log('开始');
//同步写
let err = fs.writeFileSync('./one.txt','123123123');
let data = fs.readFileSync('./alipay.jpg');
fs.writeFileSync('./alipay2.jpg',data);
console.log('结束');

//读写操作 和传统方式相比,
// 此方法一旦运行不会立即进行读写操作,需要手动触发
let createdReadStream = fs.createdReadStream('./alipay.jpg');
let createdWriteStream = fs.createdWriteStream('./alipay3.jpg');
readStream.on('data',function (d) {
    writeStream.write(d);
});
readStream.on('end',function (d1) {
    conso.__lookupGetter__('读写操作完成');
});