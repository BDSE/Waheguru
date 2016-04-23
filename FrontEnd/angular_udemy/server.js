var staticServer = require('static-server');

var server = new staticServer({
	rootPath: './public',
	port: 3000
})

server.start(function () {
	console.log("Server started at port: " + server.port);
})