var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response) {
	response.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
	response.write("<h1>Dados da query string</h1>");

	var result = url.parse(request.url, true);

	console.log(result.query);

	for(var key in result.query){
		response.write("<h2>" +key+ " : " +result.query[key]+ "</h2>");
	}

	response.end();
});

server.listen(3000);