'use strict';

var https = require('follow-redirects').https;
var http = require('http');


exports.me = function(req, response){
  var url = 'http://www.instagram.com/hemant3370/media/';
var options = {
    host: 'instagram.com',
    path: '/hemant3370/media',
    headers: {'User-Agent': 'request'}
};

https.get(options, function (res) {
    var json = '';
    res.on('data', function (chunk) {
        json += chunk;
    });
    res.on('end', function () {
        if (res.statusCode === 200) {
            try {
                var data = JSON.parse(json);
                response.json(data);
                console.log(JSON.stringify(data));
            } catch (e) {
       
                console.log('Error parsing JSON!');
            }
        } else {
        	
            console.log('Status:', res.statusCode);
        }
    });
}).on('error', function (err) {
	res.end('Error:', err);
      console.log('Error:', err);
});
};

