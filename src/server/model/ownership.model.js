/**
 * Created by kaloczidavid on 2016. 11. 19..
 */

const mysql        = require('mysql');
const MYSQL_CONFIG = require('../../../config/mysql.config.json');

function processRows(rows) {
  let result = {};
  for (let row of rows) {
    console.log(row);
    let person = row.person_id;
    let car    = row.car_id;
    if(!result.hasOwnProperty(person)) {
      result[person] = [];
    }
    result[person].push(car);
  }
  return result;
}

const list = (callback) => {
  const query = `
        SELECT
          ownerships.id,
          people.id AS 'pid',
          cars.id as 'cid',
          people.name,
          people.age,
          cars.manufacturer,
          cars.type,
          cars.year
        from ownerships
        INNER JOIN cars ON ownerships.car_id = cars.id
        INNER  JOIN people ON ownerships.person_id = people.id
`;
  const conn  = mysql.createConnection(MYSQL_CONFIG);
  conn.query(query, (err, rows) => {
    if (!err) {
      console.log('ownerships list success!');
    } else {
      console.log('ownerships list error!', err);
    }
    callback({
      data : rows,
      error: err
    });
  });
  conn.end();
};

const get = (id, callback) => {
  const query = `SELECT 
                    people.*, 
                    cars.* 
                  FROM ownerships
                  INNER JOIN cars ON ownerships.car_id = cars.id
                  INNER  JOIN people ON ownerships.person_id = people.id WHERE person_id=${id}`;
  const conn  = mysql.createConnection(MYSQL_CONFIG);
  conn.query(query, (err, rows) => {
    if (!err) {
      console.log('ownerships get success!');
    } else {
      console.log('ownerships get error!', err);
    }
    callback({
      data : rows,
      error: err
    });
  });

  conn.end();
};

const add = (data, callback) => {
  const query = `INSERT INTO ownerships(person_id, car_id) 
              VALUES("${data.pid}","${data.cid}")`;
  const conn = mysql.createConnection(MYSQL_CONFIG);
  conn.query(query, (err, rows) => {
    if (!err) {
      console.log('ownerships add success!', rows);
    } else {
      console.log('ownerships add error!', err);
    }
    callback({
      data : rows,
      error: err
    });
  });

  conn.end();
};

const update = (id, data, callback) => {
  const query = `UPDATE ownerships SET
                  car_id=${data.cid},
                  person_id=${data.pid}
                WHERE id=${id}
  `;
  const conn  = mysql.createConnection(MYSQL_CONFIG);
  conn.query(query, (err, rows) => {
    if (!err) {
      console.log('ownerships update success!');
    } else {
      console.log('ownerships update error!', err);
    }
    callback({
      data : rows,
      error: err
    });
  });

  conn.end();
};

const del = (id, callback) => {
  const query = `DELETE FROM ownerships WHERE id=${id}`;
  const conn  = mysql.createConnection(MYSQL_CONFIG);
  conn.query(query, (err, rows) => {
    if (!err) {
      console.log('ownerships del success!');
    } else {
      console.log('ownerships del error!', err);
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