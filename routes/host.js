var url = require("url");
var uid = require("shortid");
var download = require("../utils/download");
var config = require("../config");

function route(request, response) {
	var url_parts = url.parse(request.url, true);
	var query = url_parts.query;

	var ip = request.headers['x-real-ip'];

	if(ip == null || ip == "127.0.0.1") {
		if(query.image != "undefined") {
			var id = uid.generate();
			download.download(query.image, config.savedir + "/" + id + ".png", function() {
				response.writeHead(200, {"Content-Type": "text/plain"});
				response.end(config.host + "/" + id + ".png");
			});
		} else {
			response.writeHead(200, {"Content-Type": "text/plain"});
			response.end("Invalid image link.");
		}
	} else {
		response.end("You don't permission to do that")
	}
}

exports.route = route;
