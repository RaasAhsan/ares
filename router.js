var url = require("url");
var HashMap = require("hashmap").HashMap;

var gets = new HashMap();
var posts = new HashMap();
var defroute;

function route(request, response) {
	var method = request.method;
	var path = url.parse(request.url).pathname;

	console.log(method + " " + path + " from " + request.connection.remoteAddress + "...");

	if(method == "GET") {
		var f = gets.get(path);
		if(f != null) {
			f(request, response);
		} else {
			defroute(request, response)
		}
	} else if(method == "POST") {
		var f = posts.get(path);
		if(f != null) {
			f(request, response);
		} else {
			defroute(request, response)
		}
	}
	// check forwarded ip to ensure outsiders cant submit images

	response.end();
}

function defaultRoute(callback) {
	defroute = callback;
}

function get(path, callback) {
	gets.set(path, callback);
}

function post(path, callback) {
	posts.set(path, callback);
}

exports.route = route;
exports.defaultRoute = defaultRoute;
exports.get = get;
exports.post = post;
