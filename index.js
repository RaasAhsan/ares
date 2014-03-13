var ares = require("./server");
var router = require("./router");
var config = require("./config");

var index = require("./routes/index");
var host = require("./routes/host");
var dr = require("./routes/default");

router.get("/", index.route);
router.get("/host", host.route);
router.defaultRoute(dr.route);

ares.start(router, config.port);
