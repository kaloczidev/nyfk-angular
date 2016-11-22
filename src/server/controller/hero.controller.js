/**
 * Created by kaloczidavid on 2016. 10. 25..
 */

const HeroModel = require('../model/hero.model');

let get = (req, res) => {
  console.log('Hero GET controller', req.params);
  const id = req.params.id;
  console.log('selected id: ', id);
  if(id !== undefined ) {
    // we have id!
    HeroModel.get(id, (result) => {
      if (!result.err) {
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
module.exports = {
  get   : get
};