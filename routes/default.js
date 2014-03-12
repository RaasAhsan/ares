var url = require("url");
var fs = require('fs');
var im = require('imagemagick');

var imagePaths = "./images/"

function route(request, response) {
	var path = url.parse(request.url).pathname.substr(1);
	var url_parts = url.parse(request.url, true);
	var query = url_parts.query;

	if(path == "favicon.ico") {
		var img = fs.readFileSync(path);
		response.writeHead(200, {"Content-Type": "image/png"});
		response.end(img, 'binary');
	} else {
		var size = 256;
		if(query.size != null) {
			size = query.size;
		}
		if(size > 512) {
			size = 512;
		}
		if(size < 0) {
			size = 8;
		}

		var imgPath = imagePaths + path;
		if(fs.existsSync(imgPath)) {
			im.resize({
				srcPath: imgPath,
				width: size
			}, function(err, stdout, stderr) {
				response.writeHead(200, {"Content-Type": "image/png"});
				response.end(stdout, 'binary');
			}); 
		} else {
			response.writeHead(200, {"Content-Type": "text/plain"});
			response.end("Couldn't find that image.")
		}
	}
}

exports.route = route;
