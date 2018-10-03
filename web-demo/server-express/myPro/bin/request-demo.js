const request = require('request');
//利用request模块发送请求
request({
    url:'http://localhost:8181/find',
    method:'get',
    body:{name:'zzw',age:19},
    json:true
},function (request,response,body) {
    console.log('body   =  '+body.name);

});