var express = require('express');
var app = express();

app.get('/ping', function (req, res) {
      res.send('pong');
   });

app.post('/pong', function (req, res) {
      res.send('ping');
   });
   
app.use(function(req, res) {
	   res.status(404).send('403');
});

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
})