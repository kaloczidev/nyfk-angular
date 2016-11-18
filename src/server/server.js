/**
 * Created by kaloczidavid on 2016. 10. 01..
 */

var express = require('express');
var config  = require('./../../config/server-config.json');
var router  = require('./router');

var bodyParser = require('body-parser');

var app = express();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


app.use('/',express.static(__dirname + './../../dist'));

app.use(router);

console.log(config);
app.listen(config.PORT);