const db = require('../db');

module.exports = {
  getAll: (callback) => {
    db.Words.find({}, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },

  create: (word, definition, callback) => {
    console.log('right before .create');
    db.Words.create({word: word, definition: definition}, (err) => {
      console.log('err within .create: ', err);
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    })
  }
}