/**
 * Created by kaloczidavid on 2016. 10. 25..
 */


const express = require('express');
const router  = express.Router();

const peopleController    = require('./controller/people.controller');
const carsController      = require('./controller/cars.controller');
const ownershipController = require('./controller/ownership.controller');

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

router.get('/ownerships/', ownershipController.list);          //all
router.get('/ownerships/:id', ownershipController.get);        //get
router.put('/ownerships/', ownershipController.put);           //add
router.post('/ownerships/:id', ownershipController.post);      //upd
router.delete('/ownerships/:id', ownershipController.delete);  //del

module.exports = router;