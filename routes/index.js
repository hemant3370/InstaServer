'use strict';

var https = require('follow-redirects').https;
var http = require('http');


exports.me = function(req, response) {
    var query = req.params.string;
    
    var options = {
        host: 'instagram.com',
        path: '/' + query + '/media',
        headers: {
            'User-Agent': 'request'
        }
    };
    https.get(options, function(res) {
        var json = '';
        res.on('data', function(chunk) {
            json += chunk;
        });
        res.on('end', function() {
            if (res.statusCode === 200) {
                try {
                    var data = JSON.parse(json);
                    response.setHeader("Access-Control-Allow-Origin", "*");
                    response.json(data);
                    
                } catch (e) {
                    response.json(e);
                    console.log('Error parsing JSON!');
                }
            } else {
                response.end("unknown error");
                console.log('Status:', res.statusCode);
            }
        });
    }).on('error', function(err) {
        res.end('Error:', err);
        console.log('Error:', err);
    });
};