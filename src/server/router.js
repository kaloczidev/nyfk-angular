/**
 * Created by kaloczidavid on 2016. 10. 25..
 */


const express = require('express');
const router  = express.Router();

const peopleController    = require('./controller/people.controller');
const carsController      = require('./controller/cars.controller');

router.get('/people/', peopleController.list);          //all
router.get('/people/:id', peopleController.get);        //get
router.put('/people/', peopleController.put);           //add
router.post('/people/:id', peopleController.post);      //upd
router.delete('/people/:id', peopleController.delete);  //del

router.get('/cars/', carsController.list);          //all
router.get('/cars/:id', carsController.get);        //get
router.put('/cars/', carsController.put);           //add
router.post('/cars/:id', carsController.post);      //upd
router.delete('/cars/:id', carsController.delete);  //del


module.exports = router;