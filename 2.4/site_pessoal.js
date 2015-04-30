var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response) {
	fs.readFile(__dirname + '/index.html', function(err, html) {
		response.writeHead(200, {'Content-type': 'text/html'});
		response.write(html);
		response.end();
	});
});

server.listen(3000);