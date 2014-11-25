/*
    hello-server.js

    The most basic web server you can write using Node.js
*/

'use strict';

var http = require('http');

//// req = requested object
//// res = respond object
//var server = http.createServer(function(req, res) {
//    // 200 = all okay
//    res.writeHead(200, {'Content-Type': 'text/plain'});
//    res.end('You requested ' + req.url);
//});

var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello World from Hannah!');
});

app.get('/foo', function(req, res) {
    res.send('You requested /foo!');
});

app.listen(8080, function() {
    console.log('Server listening on http://localhost:8080');
});