/**
 * Created by kaloczidavid on 2016. 10. 25..
 */


const express = require('express');
const router  = express.Router();

const HeroController = require('./controller/hero.controller');

// middleware, minden bejovo methodra (.all) figyel. 
// A '*' utvonal miatt, mindenutra figyel.
// a next() miatt ez a fuggveny feldolgozas utan nem fogja 
// blokkolni a tovabbi route illeszteseket.

router.all('*', (req, res, next) => {
  // pl authentication
  console.log('valami tortent!');
  next();
});

/* 
 * router.<method>( <url>, <callback>);
 * method: http keres methodja
 * url: http keres url-je
 * callback: vegrehajtando fuggveny. ezekben dolgozzuk fel a 
 * kerest (req) es a valaszt (res).
 * url-eknel pl. a get pramokat a :paramName tudjuk defiialni.
 */

router.get('/hero', HeroController.get); 		//all heroes
router.get('/hero/:id', HeroController.get); 	//one hero
router.post('/hero', HeroController.post);

module.exports = router;
