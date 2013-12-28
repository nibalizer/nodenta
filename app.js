var express = require('express');
var zfs = require('zfs');

var app = express();

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

//  var prop = list.map ( function (element) { if ( element.name == 'picombinator/nibalizer/science' ) { return element }} )


  var prop;


  for (var i=0; i<list.length; i++) {

  if ( list[i].name == 'picombinator/nibalizer/science' ) 
    { prop = list[i] }

  } 


  res.send(prop) } );
});


app.listen(3000);
console.log('Listening on port 3000');
