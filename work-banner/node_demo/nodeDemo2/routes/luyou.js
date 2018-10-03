const url = require("url");
const fs = require('fs');
function luyou(request,response) {
    console.log('111')
    let path= url.parse(request.url).pathname;
    console.log('222222');
    switch(path){
        case"/student":response.write("this is student");response.end();break;
        case"/teacher":response.write("this is teacher");response.end();break;
        case"/login":let login = fs.readFileSync('../public/login.html');response.write(login.toString());response.end();break;
        default:response.write("this is default");response.end();break;
    }
}
module.exports = luyou;