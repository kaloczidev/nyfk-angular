/**
 * Created by kaloczidavid on 2016. 11. 22..
 */


const heroes = [
  {name: 'Batman',  power: 6, intelligence: 8, agility: 7},
  {name: 'Superman',power: 8, intelligence: 7, agility: 5},
  {name: 'Arrow',   power: 5, intelligence: 3, agility: 9}
];


let list = (callback) => {
  console.log('Hero model, list heroes:', heroes);

  callback({
    data: heroes,
    err: null
  });
};

let get = (index, callback) => {
  console.log('Hero model, get one hero', heroes[index]);
  if( index < 0 || index >= heroes.length ) {
    callback({
      data: null,
      err: 'invalid index!'
    });
  } else {
    callback({
      data: heroes[index],
      err: null
    });
  } 
};

module.exports = {
  list  : list,
  get   : get,
};