/**
 * Created by kaloczidavid on 2016. 10. 25..
 */

const peopleModel = require('../model/people.model');

const list = (req, res) => {
  console.log('list message:', req.params);
  peopleModel.list((result) => {
    console.log(result);
    if (!result.error) {
      res.header(200).send(result.data);
    } else {
      res.header(400).send(result.error);
    }
  });
};

let get = (req, res) => {
  console.log('get message:', req.params);
  const id = req.params.id;
  peopleModel.get(id, (result) => {
    if (!result.error) {
      res.header(200).send(result.data);
    } else {
      res.header(404).send(result.error);
    }
  });

};
let put = (req, res) => {
  console.log('put data: ', req.body);
  peopleModel.add(req.body, (result) => {
    if (!result.error) {
      res.header(200).send(result.data);
    } else {
      res.header(404).send(result.error);
    }
  });
};

let post = (req, res) => {
  const id = req.params.id;
  console.log('put id: ', id);
  console.log('put data:', req.body);
  peopleModel.update(id, req.body, (result) => {
    if (!result.error) {
      res.header(200).send(result.data);
    } else {
      res.header(404).send(result.error);
    }
  });
};

let del = (req, res) => {
  const id = req.params.id;
  console.log('delete id: ', id);
  peopleModel.delete(id, (result) => {
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