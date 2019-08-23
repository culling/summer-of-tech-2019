/*
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express     = require('./config/express');

var app         = express();


var port = 80;
app.listen(port);
module.exports = app;
console.log('server running at http://localhost:' + port);
*/

console.log("server.js loaded");
process.env.NODE_ENV = process.env.NODE_ENV  || "development" ;
var config  = require("./config/config.js");

var express = require("./config/express");
var app     = express();

app.listen(config.port, function(){
    console.log(process.env.NODE_ENV);
    console.log("Listening on Port: "+ config.port);
});