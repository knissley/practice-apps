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
  },

  findWords: (query, callback) => {
    const regex = new RegExp(query, 'i');
    db.Words.find({word: {$regex: regex}}, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },

  getByPage: (page, pageLimit, callback) => {
    //there was a fields parameter here before skip
    page = page - 1;


    // db.Words.find({}, {skip: pageLimit * page, limit: pageLimit}, (err, results) => {
    //   if (err) {
    //     console.log('error in get by page: ', err);
    //     callback(err);
    //   } else {
    //     callback(null, results)
    //   }
    // })
    let skipAmount = page * pageLimit;

    db.Words.find({}).skip(skipAmount).limit(10)
    .exec( (err, results) => {
      console.log('words found: ', results.length);
      if(err) {
        console.log(err);
        callback(err);
      } else {
        callback(err, results);
      }
    })
  }
}