var ares = require("./server");
var router = require("./router");

var index = require("./routes/index")

router.get("/", index.route)

ares.start(router, 1338);
