var imagePaths = "./images/"

function route(request, response) {
	var path = url.parse(request.url).pathname.substr(1);
}

exports.route = route;
