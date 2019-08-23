process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express     = require('./config/express');

var app         = express();


var port = 80;
app.listen(port);
module.exports = app;
console.log('server running at http://localhost:' + port);