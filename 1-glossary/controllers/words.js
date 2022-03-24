const db = require('../db');
const models = require('../models');



module.exports = {
  get: (req, res) => {
    models.words.getAll((err, results) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(results);
      }
    })
  },

  post: (req, res) => {
    const word = req.body.word;
    const definition = req.body.definition;
    models.words.create(word, definition, (err) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.sendStatus(201);
      }
    })
  },

  patch: (req, res) => {
    const wordToChange = req.body.word;
    const newDefinition = req.body.newDefinition;
    models.words.update(wordToChange, newDefinition, (err) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.sendStatus(200);
      }
    })
  },

  delete: (req, res) => {
    const wordToDelete = req.body.word;
    models.words.removeWord(wordToDelete, (err) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.sendStatus(200);
      }
    })
  },

  search: (req, res) => {
    const query = req.query.query;

    models.words.findWords(query, (err, results) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(results);
      }
    })
  },

  getByPage: (req, res) => {
    const page = req.query.page;
    const pageLimit = req.query.limit;

    models.words.getByPage(page, pageLimit, (err, results) => {
      const words = results;
      console.log(words);
      if (err) {
        res.sendStatus(404);
      } else {
        db.Words.countDocuments({}, (err, count) => {
          if (err) {
            console.log(err);
            res.sendStatus(404);
          } else {
            const data = {
              words: results,
              count: count
            }
            res.send(data);
          }
        })
      }
    })

  }
}