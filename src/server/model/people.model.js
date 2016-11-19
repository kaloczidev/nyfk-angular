/**
 * Created by kaloczidavid on 2016. 11. 19..
 */

let mysql          = require('mysql');
const MYSQL_CONFIG = require('../../../config/mysql.config.json');

let list = function (callback) {
  const query = `SELECT * FROM people`;
  let conn    = mysql.createConnection(MYSQL_CONFIG);
  conn.query(query, (err, rows) => {
    if (!err) {
      console.log('success!');
    } else {
      console.log('error!');
    }
    callback({
      data : rows,
      error: err
    });
  });

  conn.end();
};

let get = function (id, callback) {
  const query = `SELECT * FROM people WHERE id=${id}`;
  let conn    = mysql.createConnection(MYSQL_CONFIG);
  conn.query(query, (err, rows) => {
    if (!err) {
      console.log('success!');
    } else {
      console.log('error!');
    }
    callback({
      data : rows,
      error: err
    });
  });

  conn.end();
};

let add = function (data, callback) {
  const query = `INSERT INTO people(name, age) 
              VALUES("${data.name}", ${data.age} )`;

  let conn = mysql.createConnection(MYSQL_CONFIG);
  conn.query(query, (err, rows) => {
    if (!err) {
      console.log('success!');
    } else {
      console.log('error!');
    }
    callback({
      data : rows,
      error: err
    });
  });

  conn.end();
};

let update = function (id, data, callback) {
  const query = `UPDATE people SET
                  name="${data.name}",
                  age=${data.age}
                WHERE id=${id}
  `;
  let conn = mysql.createConnection(MYSQL_CONFIG);
  conn.query(query, (err, rows) => {
    if (!err) {
      console.log('update success!');
    } else {
      console.log('update error!', err);
    }
    callback({
      data : rows,
      error: err
    });
  });

  conn.end();
};

let del = function (id, callback) {
  const query = `DELETE FROM people WHERE id=${id}`;
  let conn    = mysql.createConnection(MYSQL_CONFIG);
  conn.query(query, (err, rows) => {
    if (!err) {
      console.log('success!');
    } else {
      console.log('error!');
    }
    callback({
      data : rows,
      error: err
    });
  });

  conn.end();
};

module.exports = {
  list  : list,
  get   : get,
  delete: del,
  add   : add,
  update: update
};