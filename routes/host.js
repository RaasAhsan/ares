var url = require("url");
var uid = require("shortid");
var download = require("../utils/download");

function route(request, response) {
	var url_parts = url.parse(request.url, true);
	var query = url_parts.query;

	if(query.image != "undefined") {
		response.writeHead(200, {"Content-Type": "text/plain"});
		var id = uid.generate();
		response.end("Hosted " + query.image + " on localhost:1338/" + id + ".png");

		download.download(query.image, "./images/" + id + ".png")
	} else {
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.end("Invalid image link.");
	}
}

exports.route = route;
