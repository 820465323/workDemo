const ws = require('ws');
const server = ws.Server;
const websocket = new server({port:8888});

//一旦有客户端与服务建立长链接,调用connection
//socket:数据传输都基于socket
//监听用户是否连接客户端
websocket.on("connection",function (socket) {
    console.log('用户连接了websocket。。。'+socket);
    //ms就是用户发送的数据(通过长链接)
    socket.on('message',function (ms) {
        //获取用户在socket上发送的数据
        console.log('ms.js =  '+ms);
        //获取所有连接在当前服务下的客户端
        //需要把消息推送给所有的客户端(遍历所有客户端得到当前客户端对象后再推送)
        websocket.clients.forEach(function (st) {
            st.send(ms);
        });
    });
    //监听客户端是否关闭
    socket.on('close',function () {
        console.log('用户关闭了客户端...');
    })
});