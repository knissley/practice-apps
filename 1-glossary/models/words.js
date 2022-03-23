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
    db.Words.create({word: word, definition: definition}, (err) => {
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
    db.Words.updateOne(query, {definition: newDefinition}, (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    })
  },

  removeWord: (wordToDelete, callback) => {
    db.Words.deleteOne({word: wordToDelete}, (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    })
  }
}