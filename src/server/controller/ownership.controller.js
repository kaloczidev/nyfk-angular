/**
 * Created by kaloczidavid on 2016. 11. 20..
 */

const OwnershipModel = require('../model/ownership.model');


const list = (req, res) => {
  console.log('ownerships list');
  OwnershipModel.list((result) => {
    if (!result.error) {
      res.header(200).send(result.data);
    } else {
      res.header(400).send(result.error);
    }
  });
};

const get = (req, res) => {
  console.log('ownerships get message:', req.params);
  const id = req.params.id;
  OwnershipModel.get(id, (result) => {
    if (!result.error) {
      res.header(200).send(result.data);
    } else {
      res.header(404).send(result.error);
    }
  });

};
const put = (req, res) => {
  console.log('ownerships put data: ', req.body);
  OwnershipModel.add(req.body, (result) => {
    if (!result.error) {
      res.header(200).send(result.data);
    } else {
      res.header(404).send(result.error);
    }
  });
};

const post = (req, res) => {
  const id = req.params.id;
  console.log('ownerships post id: ', id);
  console.log('ownerships post data:', req.body);
  OwnershipModel.update(id, req.body, (result) => {
    if (!result.error) {
      res.header(200).send(result.data);
    } else {
      res.header(404).send(result.error);
    }
  });

};

const del = (req, res) => {
  const id = req.params.id;
  console.log('ownerships delete id: ', id);
  OwnershipModel.delete(id, (result) => {
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