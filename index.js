const server = require('./server.js');


try {
    server.init();
    server.addRoutes();
}
catch (e) {
    console.log(e.stack);
    process.exit();
}


