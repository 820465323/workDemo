const http = require("http");
const url = require("url");
const querystring = require('querystring');
function start(request,response) {
    let sum = "";
    //post传参经过请求体(request)发送到后台,
    // 先将数据存到浏览器的缓存区,
    // 在缓冲区存满时触发data事件交由服务器,
    // 所以用监听的方式获取data,并将data累加获取所有值
    request.on("data",function (data) {
        sum+=data;
    });
    //由于response.write是异步非阻塞事件,
    // 所以需要监听end,在所有参数传递完毕执行,
    // 否则异步不可控,则无法展示传递的数据
    request.on("end",function () {
        let query = querystring.parse(sum);
        console.log(query.username);
        response.end();
    });
}

const server = http.createServer(start);

server.listen(8181);