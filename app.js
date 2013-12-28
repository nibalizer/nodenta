var express = require('express');
var zfs = require('zfs');

var app = express();

app.use(express.bodyParser());

app.get('/hello.txt', function(req, res){
  res.send('Hello World');
});

app.get('/echo/:string', function(req, res){
  res.send(req.params.string);
});

app.get('/list', function(req, res){
  zfs.list(function(err, list){ res.send(list) } );
});

app.get('/get/:property', function(req, res){
  zfs.get({property: req.params.property }, function(err, list){ res.send(list) } );
});

app.get('/2/get/:property', function(req, res){
  var filesystem = req.headers['filesystem'];
  zfs.get({property: req.params.property }, function(err, list){ 
  var prop;
  for (var i=0; i<list.length; i++) {
  if ( list[i].name == filesystem ) 
    { prop = list[i] } } res.send(prop) } );
});

app.get('/3/get', function(req, res){
  var filesystem = req.headers['filesystem'];
  var property = req.headers['property'];
  zfs.get({property: property }, function(err, list){ 
  var prop;
  for (var i=0; i<list.length; i++) {
  if ( list[i].name == filesystem ) 
    { prop = list[i] } } res.send(prop) } );
});

app.post('/api/1/get', function(req, res){
  var filesystem = req.body.filesystem;
  var property = req.body.property;
  zfs.get({property: property }, function(err, list){ 
  var prop;
  for (var i=0; i<list.length; i++) {
  if ( list[i].name == filesystem ) 
    { prop = list[i] } } res.send(prop) } );
});

app.post('/api/1/set', function(req, res){
  var filesystem = req.body.filesystem;
  var property = req.body.property;
  var value = req.body.value;
  zfs.get({property: property }, function(err, list){ 
  var prop;
  for (var i=0; i<list.length; i++) {
  if ( list[i].name == filesystem ) 
    { prop = list[i] } } res.send(prop) } );
});


app.listen(3000);
console.log('Listening on port 3000');


