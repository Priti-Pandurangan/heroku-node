var express = require('express')
var app = express()

//Setting up the port for the application
var port = process.env.PORT || 5000

//Look up in the public dir
app.use(express.static(__dirname + '/Public'))

//
// app.get('/', function(request, response) {
// 	response.sendFile(__dirname + "/public/index.html");
// });

app.listen(port, function() {
	console.log('Sample app running on http://localhost:' + port)
});
