var express = require('express');
var zfs = require('zfs');

var app = express();

app.get('/hello.txt', function(req, res){
  res.send('Hello World');
});

app.get('/echo/:string', function(req, res){
  res.send(req.params.string);
});


app.listen(3000);
console.log('Listening on port 3000');
