var url = require("url");

function route(request, response) {
	var url_parts = url.parse(request.url, true);
	var query = url_parts.query;

	if(query.image != "undefined") {
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hosted " + query.image);
	} else {
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Invalid image link.");
	}
}

exports.route = route;
