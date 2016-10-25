/**
 * Created by kaloczidavid on 2016. 10. 01..
 */

var express = require('express');
var config  = require('./../../config/server-config.json');
var router  = require('./router');

var app = express();

app.use('/',express.static(__dirname + './../../dist'));

app.use(router);

console.log(config);
app.listen(config.PORT);