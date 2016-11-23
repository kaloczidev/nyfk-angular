/**
 * Created by kaloczidavid on 2016. 10. 25..
 */


const express = require('express');
const router  = express.Router();

const HeroController = require('./controller/hero.controller');

router.get('/hero', HeroController.get); 		//all heroes
router.get('/hero/:id', HeroController.get); 	//one hero

module.exports = router;
