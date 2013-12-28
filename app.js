var express = require('express');
var zfs = require('zfs');

var app = express();

app.use(express.bodyParser());

app.get('/list', function(req, res){
  zfs.list(function(err, list){ res.send(list) } );
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
  zfs.set({property: property, value: value, name: filesystem }, function(err, list){ 
  var prop;
  for (var i=0; i<list.length; i++) {
  if ( list[i].name == filesystem ) 
    { prop = list[i] } } res.send(prop) } );
});

app.post('/api/1/create', function(req, res){
  var filesystem = req.body.filesystem;
  zfs.create({name: filesystem}, function(err, list){ res.send('Creating zfs filesystem')});
});

app.post('/api/1/destroy', function(req, res){
  var filesystem = req.body.filesystem;
  zfs.destroy({name: filesystem}, function(err, list){ res.send('Destroying zfs filesystem')});
}); 

app.post('/api/1/list', function(req, res){
  zfs.list(function(err, list){ res.send(list) } );
});

app.listen(3000);
console.log('Listening on port 3000');


