express = require('express'),
app = express();
app.set('port', (process.env PORT || 5000));
http = require('http');
httpServer = http.Server(app);

app.use(express.static(__dirname+'/static'));

app.get('/', function(req, res){
    res.sendfile(__dirname + '/index.html');
});
app.listen(app.get('port'), function() {
  console.log("Node app is running on port', app.get('port'));
});
