/**
 * Created by kaloczidavid on 2016. 10. 01..
 */

const express = require('express');
const config  = require('./../../config/server.config.json');
const router  = require('./router');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use('/', express.static(__dirname + './../../dist'));

app.use(router);

console.log(config);
app.listen(config.PORT);