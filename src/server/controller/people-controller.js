/**
 * Created by kaloczidavid on 2016. 10. 25..
 */

var list = function (req, res) {
  var id = req.param('id');

  res.send({
    peoples: [1,2,3,4,5,6]
  });
};
var get = function (req, res) {
  var id = req.params.id || 'NULL';

  res.send({
    id: id
  });
};
var put = function (req, res) {

};

var post = function (req, res) {

};

var del = function (req, res) {

};

module.exports = {
  list  : list,
  get   : get,
  put   : put,
  post  : post,
  delete: del
};