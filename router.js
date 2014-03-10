var url = require("url");
var HashMap = require("hashmap").HashMap;

var gets = new HashMap();
var posts = new HashMap();

function route(request, response) {
	var method = request.method;
	var path = url.parse(request.url).pathname;

	console.log("Routing " + method + " " + path + "...");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello world!");
	
	response.end();
}

function get(path, callback) {
	gets.set(path, callback);
}

function post(path, callback) {
	posts.set(path, callback);
}

exports.route = route;
exports.get = get;
exports.post = post;
