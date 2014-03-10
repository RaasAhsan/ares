var http = require("http");

function start(router, port) {
	function onRequest(request, response){
		router.route(request, response);
	}

	http.createServer(onRequest).listen(port);

	console.log("Ares service has started on port " + port + "...");
}

exports.start = start;
