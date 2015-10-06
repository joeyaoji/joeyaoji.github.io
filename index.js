var express = require('express'),
var app = express();
var http = require('http');
var httpServer = http.Server(app);

app.use(express.static(__dirname+'/css'));
app.use(express.static(__dirname+'/js'));
app.use(express.static(__dirname+'/img'));

app.get('/', function(req, res){
    res.sendfile(__dirname + '/index.html');
});
app.listen(3000);
