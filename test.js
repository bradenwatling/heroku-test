var fs = require('fs');
var http = require('http');
var https = require('https');
var express = require('express');

var privateKey  = fs.readFileSync('ca/private/localhost.key.pem', 'utf8');
var certificate = fs.readFileSync('ca/certs/localhost.cert.pem', 'utf8');
var credentials = {key: privateKey, cert: certificate};

var app = express();

var httpServer = http.createServer(app);
app.get('/login', function (req, res) {

})

var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);
