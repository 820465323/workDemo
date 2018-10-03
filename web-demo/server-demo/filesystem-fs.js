const fs = require('fs');
//参数是要读取的文件路径
//带有回调函数就意味着是异步非阻塞
//若要同步非阻塞,去掉回调函数即可
console.log('回调函数前面');
//异步非阻塞
fs.readFile('./file-txt/one.txt',function (error,data) {
    if (error) {
        console.log('发生错误',error);
    }else {
            console.log('one.txt =   '+data.toString());
    }
});

fs.readFile('./file-txt/two.txt',function (error,data) {
    if (error) {
        console.log('发生错误',error);
    }else {
            console.log('two.txt =   '+data.toString());
    }
});

fs.readFile('./file-txt/three.txt',function (error,data) {
    if (error) {
        console.log('发生错误',error);
    }else {
        console.log('three.txt =   '+data.toString());
    }
});
console.log('回调函数后面');

//同步非阻塞
let readFile = fs.readFileSync('./file-txt/one.txt');
let readFile2 = fs.readFileSync('./file-txt/two.txt');
let readFile3 = fs.readFileSync('./file-txt/three.txt');
console.log(readFile.toString());
console.log(readFile2.toString());
console.log(readFile3.toString());