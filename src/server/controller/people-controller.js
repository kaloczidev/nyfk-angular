/**
 * Created by kaloczidavid on 2016. 10. 25..
 */

var list = function (req, res) {

  console.log('list message:', req.params);
  res.send({
    peoples: [1, 2, 3, 4, 5, 6]
  });
};
var get  = function (req, res) {
  console.log('get message:', req.params);
  var id = req.params.id || 'NULL';

  res.send({
    id: id
  });
};
var put  = function (req, res) {

  console.log('put message:', req.params);
};

var post = function (req, res) {
  console.log('q:',req.query);
  console.log('post message:', req.body);
  res.status(200).send({k: 'k'});
};

var del = function (req, res) {

  console.log('del message:', req.params);
};

module.exports = {
  list  : list,
  get   : get,
  put   : put,
  post  : post,
  delete: del
};