var url = require("url");
var fs = require('fs');

var imagePaths = "./images/"

function route(request, response) {
	var path = url.parse(request.url).pathname.substr(1);

	var img = fs.readFileSync(imagePaths + path);
	response.writeHead(200, {"Content-Type": "image/gif"});
	response.end(img, 'binary');
}

exports.route = route;
