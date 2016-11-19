/**
 * Created by kaloczidavid on 2016. 10. 25..
 */

const CarsModel = require('../model/cars.model');

const list = (req, res) => {
  console.log('cars list people');
  CarsModel.list((result) => {
    if (!result.error) {
      res.header(200).send(result.data);
    } else {
      res.header(400).send(result.error);
    }
  });
};

let get = (req, res) => {
  console.log('cars get message:', req.params);
  const id = req.params.id;
  CarsModel.get(id, (result) => {
    if (!result.error) {
      res.header(200).send(result.data);
    } else {
      res.header(404).send(result.error);
    }
  });

};
let put = (req, res) => {
  console.log('cars put data: ', req.body);
  CarsModel.add(req.body, (result) => {
    if (!result.error) {
      res.header(200).send(result.data);
    } else {
      res.header(404).send(result.error);
    }
  });
};

let post = (req, res) => {
  const id = req.params.id;
  console.log('cars post id: ', id);
  console.log('cars post data:', req.body);
  CarsModel.update(id, req.body, (result) => {
    if (!result.error) {
      res.header(200).send(result.data);
    } else {
      res.header(404).send(result.error);
    }
  });
};

let del = (req, res) => {
  const id = req.params.id;
  console.log('cars delete id: ', id);
  CarsModel.delete(id, (result) => {
    if (!result.error) {
      res.header(200).send(result.data);
    } else {
      res.header(404).send(result.error);
    }
  });
};

module.exports = {
  list  : list,
  get   : get,
  put   : put,
  post  : post,
  delete: del
};