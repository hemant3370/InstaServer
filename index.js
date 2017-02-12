var express = require('express');
var routes = require('./routes');
var http = require('https');
var path = require('path');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.engine('html', require('ejs').renderFile);
app.get('/json/:string', routes.me);
app.get('*', function(req, res) {
		res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});