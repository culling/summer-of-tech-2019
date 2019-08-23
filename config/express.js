var config  =   require('./config');
var http    =   require('http');
var express =   require('express');

module.exports = function(){
    var app =   express();

    var server  = http.createServer(app);
    //static files
    app.use(express.static('./public'));

    return server;
};