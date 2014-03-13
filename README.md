Ares is a service written in NodeJS for image rehosting.

For this service to work, you must have the following installed:
- ImageMagick

Ares has the following features:
- Given an image link, download it and assign a unique filename
- Retrieve images with specifiable dimensions

Save the following for configuration with your own values in config.js in the base directory:

```
var config = {};

config.host = "https://host.com";
config.port = 1338;
config.savedir = "./images";

module.exports = config;

```

To start Ares, run `sudo npm install` and then `nodejs index.js`.