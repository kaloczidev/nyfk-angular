/**
 * Created by kaloczidavid on 2016. 10. 25..
 */

const HeroModel = require('../model/hero.model');

// arrow function kb. (!!!) az, mint a
//  let get = function (req, res) {
//
//  }

let get = (req, res) => {
  console.log('Hero GET controller', req.params);
  // get parametereket a req.params-on keresztul erunk el.
  // a routerben a :id alapjan a .id mezon talaljuk az adott paramot.
  const id = req.params.id;
  console.log('selected id: ', id);
  if(id !== undefined ) {
    // we have id!

    // itt mar az uzleti logikahoz nyulunk, ellenoriztuk hogy
    // a kapott adatok rendben vannak-e, a tobbi a model feladata.
    HeroModel.get(id, (result) => {
      if (!result.err) {

        // res (parameterben kapott!) objecten keresztul tudunk a kliensnek valaszolni.
        // .header() a http valasz statusz kodjat adja meg
        // .send() elkuldni a valaszt a kliens szamara.
        res.header(200).send(result);
      } else {
        res.header(404).send(result);
      }
    });
  } else {
    HeroModel.list( result => {
      // get all heroes
      res.header(200).send(result);

    });
  }
};

let post = (req, res) => {
  // post eseten az adat nem parameterben erkezik, hanem a http keret "torzseben".
  // ezt az expresses body parser a req.body-ra akasztja fel, ezen keresztul erheto
  // el a kuldott adat.
  let postedData = req.body;
  console.log('post uzenet tartalma: ');
  console.log(postedData);
  res.header(200).send({uzenet: 'koszi'});
};

module.exports = {
  get   : get,
  post: post
};