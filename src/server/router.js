/**
 * Created by kaloczidavid on 2016. 10. 25..
 */


var express = require('express');
var router  = express.Router();

var peopleController = require('./controller/people-controller');

router.get('/people/', peopleController.list);
router.get('/people/:id', peopleController.get);
router.put('/people/:id', peopleController.put);
router.post('/people/:id', peopleController.post);
router.delete('/people/:id', peopleController.delete);

module.exports = router;