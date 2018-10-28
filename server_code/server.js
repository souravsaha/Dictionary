var express = require('express');
var app = express();
var fs = require("fs");

app.get('/:id', function (req, res) {
   fs.readFile( __dirname + "/" + "dictionary_database.json", 'utf8', function (err, data) {
      var words = JSON.parse( data );
      var word = words[req.params.id] 
      console.log(word);
      res.header('Access-Control-Allow-Origin','*');
      res.send({word});
   });
})

var server = app.listen(3002, function () {

   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})