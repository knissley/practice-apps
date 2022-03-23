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
  },

  update: (wordToChange, newDefinition, callback) => {
    console.log('within models.words.update');
    const query = {word: wordToChange};
    db.Words.update(query, {definition: newDefinition}, (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    })
  }
}