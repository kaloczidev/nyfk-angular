/**
 * Created by kaloczidavid on 2016. 10. 25..
 */

const PeopleModel = require('../model/people.model');

const list = (req, res) => {
  console.log('people list people');
  PeopleModel.list((result) => {
    if (!result.error) {
      res.header(200).send(result);
    } else {
      res.header(400).send(result);
    }
  });
};

let get = (req, res) => {
  console.log('people get message:', req.params);
  const id = req.params.id;
  PeopleModel.get(id, (result) => {
    if (!result.error) {
      res.header(200).send(result);
    } else {
      res.header(404).send(result);
    }
  });

};
let put = (req, res) => {
  console.log('people put data: ', req.body);
  PeopleModel.add(req.body, (result) => {
    if (!result.error) {
      res.header(200).send(result);
    } else {
      res.header(404).send(result);
    }
  });
};

let post = (req, res) => {
  const id = req.params.id;
  console.log('people post id: ', id);
  console.log('people post data:', req.body);
  PeopleModel.update(id, req.body, (result) => {
    if (!result.error) {
      res.header(200).send(result);
    } else {
      res.header(404).send(result);
    }
  });
};

let del = (req, res) => {
  const id = req.params.id;
  console.log('people delete id: ', id);
  PeopleModel.delete(id, (result) => {
    if (!result.error) {
      res.header(200).send(result);
    } else {
      res.header(404).send(result);
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