var http = require("http");
var url = require("url");
var router = require("./router");

function start(port) {
	function onRequest(request, response){
		router.route(url.parse(request.url).pathname);
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello world!");
		response.end();
	}

	http.createServer(onRequest).listen(port);

	console.log("Ares service has started on port " + port + "...");
}

exports.start = start;
