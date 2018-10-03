var http = require("http");
http.createServer(function(request,response){
	response.write("hello word")
	response.end();
}).listen(8888)