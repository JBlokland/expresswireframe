
const express = require('express');

function Server () {
};

const app = express();

Server.prototype.init = function () {
    app.listen(3000);
    console.log('server listening on port 3000');

}

Server.prototype.addRoutes = function () {
    app.get('/', function(req, res) {
        res.send('Hello from the test server.');
    });
}
let server = new Server();
module.exports = server;

