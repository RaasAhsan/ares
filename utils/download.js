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
<<<<<<< HEAD
	            format: 'png',
=======
>>>>>>> 8dc3a3d2b7fe82099f9e892a10a098e2e026fc4c
	            dstPath: output
	        }, function(err, stdout, stderr) {
	            if (err) throw err;
	        });
		});
	});
}

exports.download = download;

