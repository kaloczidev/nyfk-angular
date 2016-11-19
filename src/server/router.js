/**
 * Created by kaloczidavid on 2016. 10. 25..
 */


var express = require('express');
var router  = express.Router();

var peopleController = require('./controller/people-controller');

router.get('/people/', peopleController.list);          //all
router.get('/people/:id', peopleController.get);        //get
router.put('/people/', peopleController.put);           //add
router.post('/people/:id', peopleController.post);      //upd
router.delete('/people/:id', peopleController.delete);  //del

module.exports = router;