'use strict';

var https = require('follow-redirects').https;

exports.me = function(req, response) {
    var query = req.params.string;
    
    var options = {
        host: 'instagram.com',
        path: '/' + query + '/?__a=1',
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
                    data.items.forEach(function(elm){
                     elm.images.standard_resolution.url = elm.images.standard_resolution.url.replace("s640x640", "s1080x1080");
                      console.log(elm.id);
                    });
                    response.json(data);
                    
                } catch (e) {
                    response.json(e);
                    console.log('Error parsing JSON!');
                }
            } else {
                response.end = res.end;
                console.log('Status:', res.statusCode);
            }
        });
    }).on('error', function(err) {
        res.end('Error:', err);
        console.log('Error:', err);
    });
};
