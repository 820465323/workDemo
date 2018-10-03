const express = require("express");
//上传模块  busboy帮我们将文件与文本数据剥离开
const busboy = require("busboy");
const path = require("path");
const fs = require("fs");
const app = express();

app.post("/upload",function (req, res) {
    //第一步 busboy需要请求头信息 让busboy知道我们提交的数据中含有文件
    let bus = new busboy({headers:req.headers});
    //第二步 要将req当中的所有流信息 赋予给busboy   req.pipe()
    req.pipe(bus);
    //第三步  剥离文件  剥离文件的方法 叫file

    //怎么判断和生成并将文件保存在指定的文件夹中
    var dir = "upload";
    if (fs.existsSync(path.join(__dirname,dir))) {
        console.log("文件夹已经存在，可以直接使用")
    }else{
        console.log("文件夹不存在，需要创建");
        fs.mkdirSync(path.join(__dirname,dir))
    }

    bus.on("file",function (fieldname, file, filename, encoding, contype) {
        //fieldname  文件提交时候的input的name
        //file文件本身
        //filename 提交时的文件名称
        //encoding 当前文件的编码格式
        //contype 上传时的文件类型
        console.log('input提交的name  =  '+fieldname);
        console.log('文件本身  =   '+file);
        console.log('文件名称 =  '+filename);
        console.log('文件格式 =   '+encoding);
        console.log('文件类型 =   '+contype);
        let writeStream = fs.createWriteStream(path.join(__dirname,dir,filename),{flags:"a"});
        file.on("data",function (d) {
            writeStream.write(d);
        });
        file.on("end",function (d) {
            console.log("当前文件上传完毕了")
        })
    });
    let user = {};
    bus.on("field",function (name, val) {
        user[name] = val;
    });

    bus.on("finish",function () {
        res.send('user =   '+user.username+','+user.password);
    })


});
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