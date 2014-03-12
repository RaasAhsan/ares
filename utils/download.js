var http = require('http');
var im = require('imagemagick');

function download(image, output) {
	var request = http.get(image, function(response) {
	    var data = '';

	    response.setEncoding('binary');

	    response.on('data', function(chunk) {
	        data += chunk;
	    });

	    response.on('end', function () {
	        im.resize({
	            srcData: data,
	            width: 512,
	            height: 512,
	            dstPath: output
	        }, function(err, stdout, stderr) {
	            if (err) throw err;
	        });
		});
	});
}

exports.download = download;

