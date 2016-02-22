var fs = require("fs");
var host = 'localhost';
var port = 3000;
var express = require("express");
var index = fs.readFileSync('public/index.html');
var app = express();
app.use(express.static(__dirname + "/public")); //use static files in ROOT/public folder
app.use('/third_parthy',  express.static(__dirname + '/bower_components'));
app.get("/", function(request, res){ //root dir
  res.writeHead(200, {'Content-Type': 'text/html'});
  // change the to 'text/plain' to 'text/html' it will work as your index page
  res.end(index);
});

app.listen(port, host, function(){
  console.log('server at localhost:3000');
});
